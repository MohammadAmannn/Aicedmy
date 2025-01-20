import { UserInput } from '@/app/_Context/UserInout';
import React, { useContext } from 'react';

function Topic() {
  const { userCourseInput, setUserCourseInput } = useContext(UserInput);

  const handleInputChange = (fieldName, value) => {
    setUserCourseInput((prevData) => ({ ...prevData, [fieldName]: value }));
  };

  return (
    <div className="px-4 md:px-12 lg:px-24 py-6 space-y-8">
      {/* Input Topic */}
      <div className="space-y-2">
        <label className="text-base font-medium text-gray-700">
          Write a topic you want to learn (e.g., Python, Java, Flutter, React, etc.):
        </label>
        <input
          placeholder="Topic"
          type="text"
          className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-3 text-gray-700 focus:outline-none focus:border-violet-500 focus:ring-violet-500 transition duration-300"
          defaultValue={userCourseInput?.topic}
          onChange={(e) => handleInputChange('topic', e.target.value)}
        />
      </div>

      {/* Text Area */}
      <div className="space-y-2">
        <label className="text-base font-medium text-gray-700">
          Tell us more about what you want to include in your course (Optional):
        </label>
        <textarea
          placeholder="About Your Course"
          className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-3 text-gray-700 h-32 resize-none focus:outline-none focus:border-violet-500 focus:ring-violet-500 transition duration-300"
          defaultValue={userCourseInput?.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
        />
      </div>
    </div>
  );
}

export default Topic;
