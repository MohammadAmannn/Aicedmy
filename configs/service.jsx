// utils/youtube.js
import axios from "axios";

// Define the base URL for YouTube API
const YOUTUBE_BASE_URL = "https://www.googleapis.com/youtube/v3/search";

// Function to get videos from YouTube API based on the query
export const getVideos = async (query) => {
  try {
    const params = {
      part: "snippet",
      q: query,
      maxResults: 2,
      type:'video',
      key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY, // Fetch the API key from env variables
    };

    const response = await axios.get(YOUTUBE_BASE_URL, { params });
    return response.data.items.map((item) => ({
      title: item.snippet.title,
      videoId: item.id.videoId,
      thumbnail: item.snippet.thumbnails.default.url,
    }));
  } catch (error) {
    console.error("Error fetching videos from YouTube:", error);
    throw error;
  }
};
