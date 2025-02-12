import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function Home() {
  useEffect(() => {
    let scrollY = window.scrollY;
    let targetY = window.scrollY;
    const ease = 0.1; // Adjust for smoothness

    const updateScroll = () => {
      scrollY += (targetY - scrollY) * ease;
      window.scrollTo(0, scrollY);
      requestAnimationFrame(updateScroll);
    };

    const handleScroll = (event) => {
      event.preventDefault(); // Stop default scroll
      targetY += event.deltaY * 0.8; // Adjust speed here
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    requestAnimationFrame(updateScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-8 relative">
      {/* Glow effect background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 opacity-20 blur-3xl"></div>

      <div className="relative z-10 text-center max-w-4xl w-full space-y-8">
        {/* Title Section */}
        <div className="space-y-0">
          <h1 className="text-5xl py-8 md:text-6xl font-extrabold text-blue-400 drop-shadow-lg animate-pulse">
            Salin Shrestha 👾
          </h1>
          <h2 className="text-lg md:text-xl text-gray-300">@tmsalinshrestha</h2>
        </div>

        {/* Bio */}
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed mx-auto">
          Born from lines of code, raised by algorithms, and destined to shape the digital world. 
          A programmer who doesn’t just write code but <b>weaves digital spells</b>. 🚀
        </p>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Facts */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700">
            <h3 className="text-2xl font-semibold text-blue-300 mb-3">🔥 Unexpected Facts 🔥</h3>
            <ul className="space-y-2 text-gray-300 text-lg text-left">
              <li>💡 Once tried to hack into my own brain. Results pending. 🧠</li>
              <li>⌨️ Can write a function faster than tying my shoelaces. 👟</li>
              <li>⏳ Time traveler... but only forward at normal speed.</li>
            </ul>
          </div>

          {/* Hobbies */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700">
            <h3 className="text-2xl font-semibold text-blue-300 mb-3">💡 Hobbies & Interests</h3>
            <ul className="space-y-2 text-gray-300 text-lg text-left">
              <li>🎯 Coding till my fingers refuse to type.</li>
              <li>🔎 Debugging life problems like they’re syntax errors.</li>
              <li>💻 Dreaming in 0s and 1s.</li>
            </ul>
          </div>

          {/* Past - Full Width */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 col-span-1 md:col-span-2">
            <h3 className="text-2xl font-semibold text-blue-300 mb-3">⏳ The Past</h3>
            <p className="italic text-gray-400">
              Legend has it that Salin was once a mere mortal, until a JavaScript function rewrote his destiny.
              Now, he walks among us, writing code that bends reality.
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-6 text-lg text-gray-400 px-6 max-w-3xl mx-auto">
          👀 More coming soon. Stay tuned. 
          <br></br>!!!EXPERIMENTAL PAGE!!!
        </p>
        <p className="text-gray-400 text-sm mt-8 border-t border-gray-700 pt-4 pb-4 tracking-widest uppercase">
          &copy; {new Date().getFullYear()} <span className="text-blue-400 font-semibold">Salin Shrestha</span> (@tmsalinshrestha) • All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

