"use client";
import { db } from "@/configs/db";
import { Chapters, CourseList } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { and, eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import CourseBasic from "./_components/Course_basic_info";
import CourseDetails from "./_components/course_details";
import ChapterList from "./_components/Chapter_List";
import { Button } from "@/components/ui/button";
import { GenerateChapter_AI } from "@/configs/Ai_Model";
import LoadingDialog from "../Loading";
import { toast } from "sonner";
import { getVideos } from "@/configs/service";
import { useRouter } from "next/navigation";

function CourseLayout({ params }) {
  // Get the authenticated user
  const { user } = useUser();
  const router = useRouter();

  // State to store the course data
  const [courses, setCourses] = React.useState(null);
  const [Loading, setLoding] = useState(false);

  // Fetch the course details when params and user are available
  useEffect(() => {
    params && user && GetCourse();
  }, [params, user]);

  // Fetch course from the database based on courseId and createdBy
  const GetCourse = async () => {
    const result = await db
      .select()
      .from(CourseList)
      .where(
        and(
          eq(CourseList.courseId, params?.courseid),
          eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress)
        )
      );

    // Store the course in the state
    setCourses(result[0]);

    console.log(result);
  };

  // Function to dynamically generate the AI prompt for each chapter
  const GenerateChapter = async () => {
    setLoding(true);
    if (!courses || !courses.courseOutput?.chapters) return;

    for (let index = 0; index < courses.courseOutput.chapters.length; index++) {
      const chapter = courses.courseOutput.chapters[index];
      const PROMPT = `Explain the concept in detail on topic: ${
        courses?.name
      }, chapter ${index + 1}: ${
        chapter.name
      }. Provide the explanation in JSON format with a list of array with fields like title, explanation (detailed), and code example (code field in <precode> format) if applicable.`;

      try {
        const [aiResult, videoResponse] = await Promise.all([
          GenerateChapter_AI.sendMessage(PROMPT),
          getVideos(`${courses?.name}: ${chapter?.name}`),
        ]);

        const content = JSON.parse(await aiResult.response.text());
        const videoID = videoResponse[0]?.videoId || "";
        const thumbnail = videoResponse[0]?.thumbnail || ""; // Extract the thumbnail

        // Insert chapter details into the database, including thumbnail
        // Insert the chapter data into the database after both tasks are complete
        await db.insert(Chapters).values({
          chapterId: index + 1, // Assuming chapterId is the index in this case
          courseId: courses?.courseId,
          content: content,
          videoId: videoID, // This should now be populated
          thumbnail: videoResponse[0]?.thumbnail, // Add the thumbnail here
        });

        console.log(`Chapter ${index + 1} saved successfully`);
      } catch (error) {
        console.error(`Error saving chapter ${index + 1}:`, error);
        toast.error(`Error saving chapter ${index + 1}`);
      }
    }

    setLoding(false);
    toast.success("Course chapters generated and saved successfully!");
    router.replace(`/create-course/${courses?.courseId}/finish`);
  };

  return (
    <div className="mt-10 px-7 md:px-20 lg:px-44">
      <h2 className="font-bold text-center text-2xl">Course Layout</h2>
      <LoadingDialog loading={Loading} />

      {/* Display course basic information */}
      {courses ? (
        <CourseBasic course={courses} />
      ) : (
        <p>Loading course details...</p>
      )}

      {/* Display course details */}
      {courses && <CourseDetails course={courses} />}

      {/* Display list of chapters */}
      {courses && <ChapterList course={courses} />}

      {/* Button to generate the AI-based chapter explanation */}
      <Button className="my-10" onClick={GenerateChapter}>
        Generate Course
      </Button>
    </div>
  );
}

export default CourseLayout;
