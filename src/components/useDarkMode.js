import { useEffect, useState } from "react";

export default function useDarkMode(){
  const [dark,setDark]=useState(()=>{
    if (typeof window==="undefined") return true;
    const stored=localStorage.getItem("theme");
    if (stored) return stored==="dark";
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(()=>{
    if (dark){
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme","dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme","light");
    }
  },[dark]);

  return [dark,setDark];
}