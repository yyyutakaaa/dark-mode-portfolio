import { useState, useEffect } from "react";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("siteCookies="));
    if (!cookie) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    const date = new Date();
    date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);
    document.cookie = `siteCookies=true; expires=${date.toUTCString()}; path=/`;
    setShowBanner(false);
  };

  const declineCookies = () => {
    const date = new Date();
    date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);
    document.cookie = `siteCookies=declined; expires=${date.toUTCString()}; path=/`;
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex flex-col md:flex-row items-center justify-between z-50">
      <p className="mb-2 md:mb-0 text-sm">
        We use cookies to improve your experience and speed up load times. By
        accepting or declining, your choice will be saved for 30 days.
      </p>
      <div className="flex space-x-4">
        <button
          onClick={acceptCookies}
          className="bg-[#00D4FF] text-[#0D1117] px-4 py-2 rounded hover:bg-[#FF007A] transition-colors"
        >
          Accept
        </button>
        <button
          onClick={declineCookies}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500 transition-colors"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
