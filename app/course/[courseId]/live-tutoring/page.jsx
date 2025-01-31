"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { db } from "@/configs/db";
import { v4 as uuidv4 } from "uuid";
import { toast } from "sonner";
import { LiveSessions } from "@/configs/schema"; // Import LiveSessions here

function LiveTutoring({ params,chapter }) {
  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState("");

  const createMeetSession = async () => {
    setLoading(true);
    try {
      // Generate a mock Google Meet link
      const meetLink = `https://meet.google.com/${uuidv4().slice(0, 8)}`;
      setLink(meetLink);

      // Validate params.courseId
      if (!params?.courseId) {
        throw new Error("Course ID is undefined");
      }

      // Save session details to the database
      console.log("Params Course ID:", params?.courseId);

      await db.insert(LiveSessions).values({
        courseId: params.courseId, // Ensure courseId exists
        link: meetLink,
        createdAt: new Date().toISOString(), // Use ISO string for createdAt
      });

      toast.success("Live session created successfully!");
    } catch (error) {
      console.error("Error creating meet session:", error);
      toast.error("Failed to create live session.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Live Tutoring for {params?.courseId}</h1>
      <Button
        className="mt-5 bg-green-600 text-white"
        onClick={createMeetSession}
        disabled={loading}
      >
        {loading ? "Creating..." : "Create Live Session"}
      </Button>
      {link && (
        <div className="mt-5">
          <h2 className="text-lg font-semibold">Join the session:</h2>
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            {link}
          </a>
        </div>
      )}
    </div>
  );
}

export default LiveTutoring;
