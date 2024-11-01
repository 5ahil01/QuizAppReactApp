import React from "react";

const Header = () => {
  return (
    <header className="border-2 border-red-600 flex justify-center">
      <div className="flex flex-col  items-center">
        <img src="public\quiz-logo.png" alt="" className="w-[60px]" />
        <h1 className="text-3xl mt-4 text-purple-700 font-[500]">REACT QUIZ</h1>
      </div>
    </header>
  );
};

export default Header;
