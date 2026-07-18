import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#10261d] text-white flex items-center justify-center px-4">
      <div className="text-center max-w-lg">

        <p className="text-7xl md:text-8xl font-bold text-green-400 mb-4">
          404
        </p>

        <h1 className="text-2xl md:text-3xl font-semibold mb-4">
          Looks like you've wandered off the trail
        </h1>

        <p className="text-gray-300 leading-7 mb-8">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to exploring Kenya's hidden treasures.
        </p>

        <Link
          href="/"
          className="inline-block bg-green-500 hover:bg-green-600 transition-colors text-white font-medium px-6 py-3 rounded-lg"
        >
          Back to Home
        </Link>

      </div>
    </div>
  );
}