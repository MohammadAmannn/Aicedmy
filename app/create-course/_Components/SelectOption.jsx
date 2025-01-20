import React, { useContext } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { UserInput } from "@/app/_Context/UserInout";

function SelectOption() {
  const { userCourseInput, setUserCourseInput } = useContext(UserInput);

  const handleInputChange = (fieldName, value) => {
    setUserCourseInput((prevData) => ({ ...prevData, [fieldName]: value }));
  };

  return (
    <div className="px-6 md:px-12 lg:px-24 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Difficulty Level */}
        <div>
          <label className="text-base font-medium text-gray-700 mb-2 block">
            🎓 Difficulty Level
          </label>
          <Select
            onValueChange={(value) => handleInputChange("Level", value)}
            defaultValue={userCourseInput.Level}
          >
            <SelectTrigger className="w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Course Duration */}
        <div>
          <label className="text-base font-medium text-gray-700 mb-2 block">
            🕒 Course Duration
          </label>
          <Select
            onValueChange={(value) => handleInputChange("Duration", value)}
            defaultValue={userCourseInput.Duration}
          >
            <SelectTrigger className="w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1 Hour">1 Hour</SelectItem>
              <SelectItem value="2 Hours">2 Hours</SelectItem>
              <SelectItem value="More Than 3 Hours">
                More Than 3 Hours
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Videos Option */}
        <div>
          <label className="text-base font-medium text-gray-700 mb-2 block">
            ▶️ Do You Want Videos
          </label>
          <Select
            onValueChange={(value) => handleInputChange("Video", value)}
            defaultValue={userCourseInput.Video}
          >
            <SelectTrigger className="w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Yes">Yes</SelectItem>
              <SelectItem value="No">No</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* No of Chapters */}
        <div>
          <label className="text-base font-medium text-gray-700 mb-2 block">
            📓 No of Chapters
          </label>
          <Input
            type="number"
            value={userCourseInput.Chapters || ""}
            onChange={(e) => handleInputChange("Chapters", e.target.value)}
            className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition duration-300"
            placeholder="Enter number of chapters"
          />
        </div>
      </div>
    </div>
  );
}

export default SelectOption;
