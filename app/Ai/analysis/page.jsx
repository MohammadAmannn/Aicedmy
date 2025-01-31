'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });

export default function AnalysisPage() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isOpen, setIsOpen] = useState(true); // Always open for demo
  const [loading, setLoading] = useState(false);
  const [screenImage, setScreenImage] = useState(null);
  const [screenshotPreview, setScreenshotPreview] = useState(null);

  // Enhanced screen capture with preview
  const captureScreen = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: { displaySurface: "browser" }
      });

      const video = document.createElement('video');
      video.srcObject = stream;

      return new Promise((resolve) => {
        video.onloadedmetadata = () => {
          video.play();
          const canvas = document.createElement('canvas');
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(video, 0, 0);
          const screenshot = canvas.toDataURL('image/png');
          setScreenshotPreview(screenshot);
          resolve(screenshot);
          stream.getTracks().forEach(track => track.stop());
        };
      });
    } catch (error) {
      console.error("Screen capture failed:", error);
      return null;
    }
  };

  // Unified analysis function
  const analyzeContent = async (promptText) => {
    if (!screenImage) {
      alert("Please capture screen first!");
      return;
    }

    setLoading(true);
    try {
      const imageParts = [{
        inlineData: { 
          data: screenImage.split(',')[1],
          mimeType: 'image/png'
        }
      }];

      const result = await model.generateContent([promptText, ...imageParts]);
      setResponse(result.response.text());
    } catch (error) {
      console.error("Analysis failed:", error);
      setResponse("Error analyzing content. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Fixed sendMessage function
  const sendMessage = async (userQuery) => {
    if (!userQuery.trim()) return;
    await analyzeContent(`User is asking: "${userQuery}". Analyze their screen and provide detailed answer (code field in <precode> format) if applicable.`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-gray-800 border-gray-700 rounded-xl shadow-2xl">
          <CardContent className="p-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                  Visionary AI Assistant
                </h1>
                <Button 
                  onClick={() => captureScreen().then(setScreenImage)}
                  className="bg-purple-600 hover:bg-purple-700 text-white transition-all"
                >
                  {screenshotPreview ? "Recapture Screen" : "Capture Screen"}
                </Button>
              </div>

              {screenshotPreview && (
                <div className="relative group">
                  <img 
                    src={screenshotPreview} 
                    alt="Screen preview" 
                    className="rounded-lg border-2 border-gray-700 shadow-xl transform transition-transform group-hover:scale-101"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent rounded-lg" />
                </div>
              )}

              <div className="flex gap-4">
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask about anything on your screen..."
                  className="flex-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500"
                />
                <Button 
                  onClick={() => sendMessage(query)}
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Analyzing...
                    </div>
                  ) : 'Ask'}
                </Button>
              </div>

              {response && (
                <div className="mt-4 p-4 bg-gray-700/50 rounded-lg animate-fade-in">
                  <h3 className="text-purple-400 font-semibold mb-2">AI Analysis:</h3>
                  <p className="text-gray-100 whitespace-pre-wrap leading-relaxed">
                    {response.replace(/\*\*\*\*/g, '').replace(/\\n/g, '\n')}
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}