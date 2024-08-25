"use client";

import React, { useState } from "react";
import useConvert from "@/hooks/useConvert";
import Upload from "@/components/Upload/Upload";
import DocList from "@/components/DocList/DocList";

const Main = () => {
  const [toggleForm, setToggleForm] = useState(false);

  const handleToggle = () => {
    setToggleForm(!toggleForm);
  };
  return (
    <div className="flex flex-col gap-8 min-h-screen w-full p-4">
      <div className="flex justify-end w-full">
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 sm:px-6 rounded-full ml-2 sm:ml-1`}
          onClick={handleToggle}
        >
          {toggleForm ? "X" : "Upload"}
        </button>
      </div>
      {toggleForm && <Upload />}
      <DocList />
    </div>
  );
};

export default Main;
