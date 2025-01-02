import { useEffect, useState } from 'react';

const announcements = [
  { text: "Available for strategic consultations" },
  { text: "Transforming digital experiences" },
  { text: "Creating impactful growth strategies" }
];

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto py-3 px-4">
        <div className="flex items-center justify-center text-black/90">
          <div className="transition-all duration-500 text-sm">
            {announcements[currentIndex].text}
          </div>
        </div>
      </div>
    </div>
  );
}