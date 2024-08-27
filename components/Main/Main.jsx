"use client";

import React, { useState } from "react";
import Upload from "@/components/Upload/Upload";
import DocList from "@/components/DocList/DocList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  const [toggleForm, setToggleForm] = useState(false);

  const handleToggle = () => {
    setToggleForm(!toggleForm);
  };

  return (
    <div className="flex flex-col gap-8 min-h-screen w-full p-4">
      <div className="flex justify-end w-full">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 sm:px-6 rounded-full ml-2 sm:ml-1"
          onClick={handleToggle}
        >
          {toggleForm ? (
            "X"
          ) : (
            <>
              <FontAwesomeIcon icon={faUpload} className="mr-2" />
              Upload
            </>
          )}
        </button>
      </div>
      {toggleForm && <Upload />}
      <DocList />
    </div>
  );
};

export default Main;
