"use client";

import React, { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import "./classes.css";

const fileTypes = ["XLX", "XLSX", "XLS"];

const UploadBox = ({ onFileSelect }) => {
  const [label, setLabel] = useState("Tambahkan file disini");

  const handleChange = (file) => {
    onFileSelect(file);
    setLabel(file.name);
  };

  return (
    <FileUploader
      name="converter"
      types={fileTypes}
      label={label}
      handleChange={handleChange}
      classes="custom-class"
    />
  );
};

export default UploadBox;
