import React, { useContext, useState, useEffect, useRef } from "react";
import UploadBox from "@/components/UploadBox/UploadBox";
import { DocContext } from "@/context/DocContext";
import { formatDate } from "@/utils/formatDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const Upload = () => {
  const { data, setData } = useContext(DocContext);
  const [fileName, setFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (!fileName || !selectedFile) {
      alert("Please provide a file name and select a file.");
      return;
    }

    const currentDate = new Date();

    const newDocument = {
      name: fileName,
      document: selectedFile.name,
      file: selectedFile,
      upload_date: formatDate(currentDate),
      sent_date: formatDate(currentDate),
      action: "Uploaded",
    };

    setData([...data, newDocument]);
    setFileName("");
    setSelectedFile(null);
  };

  return (
    <div className="mx-4 p-4 sm:mx-10 md:mx-20 lg:mx-40">
      <span className="text-2xl sm:text-3xl font-bold">
      <FontAwesomeIcon icon={faUpload} className="mr-2" />
      Upload new report</span>
      <div className="flex flex-col w-full sm:w-3/4 md:w-1/2 lg:w-1/4 mt-3">
        <input
          ref={inputRef}
          className="p-3 rounded-t-lg rounded-b-md bg-gray-50 border border-black w-full text-sm"
          placeholder="Masukkan judul kegiatan"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
        />
        <div className="w-full mt-2">
          <UploadBox onFileSelect={handleFileSelect} fileName={fileName} />
        </div>
        <div className="w-full mt-4 flex justify-between sm:justify-end">
          <button
            className="bg-slate-300 hover:bg-slate-700 text-black font-bold py-2 px-4 sm:px-6 rounded-full"
            type="button"
            onClick={() => {
              setSelectedFile(null);
              setFileName("");
            }}
          >
            Batal
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 sm:px-6 rounded-full ml-2 sm:ml-1"
            type="button"
            onClick={handleUpload}
          >
            <FontAwesomeIcon icon={faUpload} className="mr-2" />
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
