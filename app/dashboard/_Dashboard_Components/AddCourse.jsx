import React from "react";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

function _AddCourse() {
  const { user } = useUser();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
    >
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Ready to create,{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {user?.fullName}
            </span>?
          </h2>
          
          <p className="text-lg text-gray-600">
            Design AI-powered courses in minutes. Share with your audience and 
            <span className="font-semibold text-blue-600"> earn rewards</span> 
            for every student enrollment.
          </p>
        </div>

        <motion.div 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-shrink-0"
        >
          <Link href="/create-course" className="block">
            <Button 
              size="lg"
              className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-200"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 mr-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
                />
              </svg>
              Create New Course
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Progress indicator example */}
      <div className="mt-8 pt-6 border-t border-gray-100">
        <div className="flex items-center gap-4 text-gray-600">
          <div className="flex-1">
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500" 
                style={{ width: '65%' }}
              />
            </div>
          </div>
          <span className="text-sm font-medium">65% course completion rate</span>
        </div>
      </div>
    </motion.div>
  );
}

export default _AddCourse;