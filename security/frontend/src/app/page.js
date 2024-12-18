"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    router.refresh();
  };

  return (
    <div>
      {isAuthenticated ? (
        <div className="flex flex-col items-center mt-[300px]">
          <h1>You are logged in!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="flex flex-col items-center mt-[300px]">
          <h1>You are not logged in!</h1>
          <button onClick={() => router.push("/login")}>
            Go to login page
          </button>
        </div>
      )}
    </div>
  );
}
