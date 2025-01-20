import { UserInput } from "@/app/_Context/UserInout";
import CategoryList from "@/app/_Shared/CategoryList";
import Image from "next/image";
import React, { useContext } from "react";

function SelectCategory() {
  const { userCourseInput, setUserCourseInput } = useContext(UserInput);

  const handleCategoryChange = (category) => {
    setUserCourseInput((prev) => ({ ...prev, category: category }));
  };

  return (
    <div>
      <h2 className="flex items-center justify-center mb-9 text-lg md:text-xl lg:text-2xl">
        Select The Course Category
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 cursor-pointer px-5 md:px-10 lg:px-20">
        {CategoryList.map((item, index) => (
          <div
            className={`flex flex-col items-center justify-center p-5 border rounded-xl transition-all duration-300 ease-in-out hover:border-violet-500 hover:bg-blue-50 ${
              userCourseInput?.category === item.name
                ? "border-violet-500 bg-blue-50"
                : "border-gray-300"
            }`}
            key={index}
            onClick={() => handleCategoryChange(item.name)}
          >
            <Image src={item.icon} width={50} height={50} alt={item.name} />
            <h2 className="mt-2 text-center text-sm md:text-base lg:text-lg">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectCategory;
