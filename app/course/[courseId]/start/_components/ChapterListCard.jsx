import React from "react";
import { IoTimeOutline } from "react-icons/io5";

function ChapterListCard({ chapter, index }) {
  return (
    <div className="grid grid-cols-5 p-4 items-center border-b">
      <div>
        <h2 className="p-1 bg-violet-500 text-center text-white rounded-full w-8 h-8">
          {index + 1}
        </h2>
      </div>
      <div className="col-span-4">
        <h2 className="font-medium">{chapter?.name}</h2> {/* Ensure the chapter name is correct */}
        <h2 className="flex items-center gap-2 text-violet-500">
          <IoTimeOutline />
          {chapter?.duration} {/* Ensure chapter duration is available */}
        </h2>
      </div>
    </div>
  );
}

export default ChapterListCard;
