"use client";
import React, { useContext, useEffect, useState } from "react";
import { HiCircleStack } from "react-icons/hi2";
import { MdOutlineTopic } from "react-icons/md";
import { IoIosOptions } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import SelectCategory from "./_Components/SelectCategory";
import Topic from "./_Components/Topic";
import SelectOption from "./_Components/SelectOption";
import { UserInput } from "../_Context/UserInout";
import { GenerateCourse_Ai } from "@/configs/Ai_Model";
import LoadingDialog from "./Loading";
import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

function CreateCourse() {
  const StepperOptions = [
    { id: 1, name: "Category", icon: <HiCircleStack /> },
    { id: 2, name: "Topic & Desc", icon: <MdOutlineTopic /> },
    { id: 3, name: "Options", icon: <IoIosOptions /> },
  ];

  const { userCourseInput } = useContext(UserInput);
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    console.log(userCourseInput);
  }, [userCourseInput]);

  const checkStatus = () => {
    if (activeStep === 0 && userCourseInput.category) return true;
    if (activeStep === 1 && userCourseInput.topic) return true;
    if (
      activeStep === 2 &&
      userCourseInput.Level &&
      userCourseInput.Duration &&
      userCourseInput.Video &&
      userCourseInput.Chapters
    )
      return true;
    return false;
  };

  const GenerateCourse = async () => {
    const Basic_Prompt =
      "Generate a course tutorial with the following details: Course Name, Description, Chapter Name, About, Duration: ";
    const USER_INPUT_PROMPT = `Category: ${userCourseInput?.category}, Topic: ${userCourseInput?.topic}, Level: ${userCourseInput?.Level}, Duration: ${userCourseInput?.Duration}, NoOfChapters: ${userCourseInput?.Chapters}, in JSON format`;

    const FINAL_PROMPT = Basic_Prompt + USER_INPUT_PROMPT;
    console.log(FINAL_PROMPT);

    setLoading(true);
    setError("");
    try {
      const result = await GenerateCourse_Ai.sendMessage(FINAL_PROMPT);
      const response = await result.response?.text();
      const parsedResponse = JSON.parse(response);

      console.log(parsedResponse);
      toast.success("Course layout generated successfully!");

      // Save the course layout in DB inside the try block
      await SaveCourseLayoutInDb(parsedResponse); // Use the parsed response here
    } catch (error) {
      console.error("Error generating course layout:", error);
      setError("Failed to generate course layout. Please try again.");
      toast.error("Error generating course layout.");
    } finally {
      setLoading(false);
    }
  };

  const SaveCourseLayoutInDb = async (courseLayout) => {
    const id = uuidv4();
    try {
      setLoading(true);
      await db.insert(CourseList).values({
        courseId: id,
        name: userCourseInput.topic,
        level: userCourseInput?.Level,
        category: userCourseInput?.category,
        courseOutput: courseLayout,
        createdBy: user?.primaryEmailAddress?.emailAddress || '',
        userName: user?.fullName || '',
        userProfileImage: user?.imageUrl || '',
      });
      console.log("Course saved successfully!");
      router.replace('/create-course/' + id);
      setLoading(false);
    } catch (error) {
      console.error("Error saving course layout to DB:", error);
      setError("Failed to save course layout.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl text-blue-800 font-semibold mb-6">
          Create Your Course
        </h2>

        <div className="flex items-center justify-center space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10">
          {StepperOptions.map((item, index) => (
            <div key={item.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`bg-gray-200 p-2 rounded-full text-gray-600 transition-colors duration-300 ${
                    activeStep >= index && "bg-yellow-400"
                  } hover:bg-blue-200`}
                >
                  {item.icon}
                </div>
                <h2 className="hidden md:block text-xs lg:text-sm mt-2 text-gray-600">
                  {item.name}
                </h2>
              </div>
              {index !== StepperOptions.length - 1 && (
                <div
                  className={`w-8 h-1 bg-blue-800 md:w-16 lg:w-24 xl:w-32 mx-2 transition-colors duration-300 ${
                    activeStep >= index + 1 && "bg-yellow-300"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 md:px-8 lg:px-12 xl:px-20 mt-10">
        {activeStep === 0 ? (
          <SelectCategory />
        ) : activeStep === 1 ? (
          <Topic />
        ) : (
          <SelectOption />
        )}

        {error && <div className="text-red-500 text-center mt-4">{error}</div>}

        <div
          className={`flex ${activeStep === 0 ? "justify-end" : "justify-between"} mt-10`}
        >
          {activeStep > 0 && (
            <Button
              variant="outline"
              onClick={() => setActiveStep(activeStep - 1)}
              disabled={loading}
            >
              Previous
            </Button>
          )}
          {activeStep < 2 ? (
            <Button
              disabled={!checkStatus() || loading}
              onClick={() => setActiveStep(activeStep + 1)}
            >
              Next
            </Button>
          ) : (
            <Button
              disabled={!checkStatus() || loading}
              onClick={GenerateCourse}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Generating...
                </>
              ) : (
                "Generate Course Layout"
              )}
            </Button>
          )}
        </div>
      </div>

      <LoadingDialog loading={loading} />
    </div>
  );
}

export default CreateCourse;