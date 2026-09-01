import React, { useRef } from "react";

const HandleTimer = () => {
  const timer = useRef<number | null>(null);
  const count = useRef<number>(0);

  const startTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
    }

    timer.current = window.setInterval(() => {
      count.current += 1;
      console.log(`カウント: ${count.current}`);
    }, 1000);
  };

  const stopTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
    }
  };

  return (
    <div>
      <button
        onClick={startTimer}
        className="p-2 bg-green-500 text-white rounded-xl m-2 cursor-pointer hover:opacity-80 transition"
      >
        タイマースタート
      </button>
      <button
        onClick={stopTimer}
        className="p-2 bg-red-500 text-white rounded-xl m-2 cursor-pointer hover:opacity-80"
      >
        タイマーストップ
      </button>
    </div>
  );
};

export default HandleTimer;
