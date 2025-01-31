import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function CourseDetails({ course }) {
  const router = useRouter();

  const handleScheduleTutoring = () => {
    router.push(`/course/${course?.courseId}/live-tutoring`);
  };

  return (
    <div className="border p-7 rounded-xl shadow-sm mt-3">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {/* Existing details */}
        <div className="flex flex-col mt-4">
          <h2 className="font-medium text-lg text-gray-700">Live Tutoring</h2>
          <Button className="mt-2 bg-blue-600 text-white" onClick={handleScheduleTutoring}>
            Schedule or Join Session
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
