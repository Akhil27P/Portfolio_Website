import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RedirectPage() {
  const { slug } = useParams();
  const [error, setError] = useState(false);
  useEffect(() => {
    // Load mappings from localStorage
    const mappings = JSON.parse(localStorage.getItem("urlMappings") || "{}");
    if (mappings[slug]) {
      // Redirect to original URL
      window.location.href = mappings[slug];
    } else {
      setError(true);
    }
  }, [slug]);

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-gray-900 to-black text-white">
        <h1 className="text-3xl font-semibold mb-4">404 - Not Found</h1>
        <p>The shortened URL <code>{slug}</code> does not exist.</p>
        <a href="/" className="mt-4 underline text-green-400">Go back to URL Shortener</a>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <p>Redirecting...</p>
    </div>
  );
}
