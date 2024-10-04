import React, { useState, useEffect } from "react";
 
const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");
 
  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);
 
  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };
 
  return (
    <button
      onClick={toggleTheme}
      className="bg-[url('https://img.icons8.com/ios-filled/50/moon.png')] active:animate-spin duration-300 h-8 w-20 dark:bg-[url('https://img.icons8.com/ios-filled/50/sun--v1.png')] bg-no-repeat bg-contain bg-center text-gray-800 dark:bg-white rounded-full dark:text-gray-200 px-10 py-2 "
    >
      {theme === "dark" ? "" : ""}
    </button>
  );
};
 
export default ThemeToggle;