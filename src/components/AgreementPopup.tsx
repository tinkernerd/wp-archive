import { useState, useEffect } from "preact/hooks";

export default function AgreementPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log("AgreementPopup mounted"); // Log when component is mounted

    if (typeof window !== "undefined") {
      const hasAgreed = localStorage.getItem("userAgreed");
      console.log("Checking localStorage:", hasAgreed); // Log value of localStorage

      if (!hasAgreed) {
        console.log("User has NOT agreed, showing popup");
        setIsVisible(true);
      }
    }
  }, []);

  const handleAgree = () => {
    console.log("User clicked Agree"); // Log when button is clicked
    localStorage.setItem("userAgreed", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null; // If not visible, don't render anything

  return (
    <div class="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-lg text-center">
        <h2 class="text-xl font-semibold mb-4">Content Warning</h2>
        <p class="text-gray-700 mb-4">
          Some images on this site may not be suitable for all audiences. Viewer discretion is advised.
        </p>
        <button onClick={handleAgree} class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          I Understand and Agree
        </button>
      </div>
    </div>
  );
}
