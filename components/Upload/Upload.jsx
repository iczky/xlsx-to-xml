import React, {useContext, useState} from 'react';
import {X} from "lucide-react";
import UploadBox from "@/components/UploadBox/UploadBox";
import {DocContext} from "@/context/DocContext";
import {formatDate} from "@/utils/formatDate";

const Upload = () => {
    const {data, setData} = useContext(DocContext);
    const [fileName, setFileName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileSelect = (file) => {
        setSelectedFile(file);
    }

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
        };

        setData([...data, newDocument]);
        setFileName(""); // Clear the file name after upload
        setSelectedFile(null); // Clear the selected file after upload
    };

    return (
        <div className="p-4 mx-4 md:mx-10 lg:mx-40 border-2 border-gray-200 flex flex-col justify-center gap-4">
            <div className="flex justify-between p-2 border-b-2 border-gray-200">
                <h1 className="text-sm md:text-lg">Upload File Excel</h1>
                <X className="cursor-pointer"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-4 md:gap-8">
                    <div className="flex w-full justify-center md:justify-end">
                        <div className="flex flex-col md:flex-row gap-2 w-full md:w-1/2 justify-end items-center">
                            <input
                                className="p-2 rounded-t-lg rounded-b-md bg-gray-300 w-full pr-8"
                                placeholder="Masukkan judul kegiatan"
                                value={fileName}
                                onChange={(e) => setFileName(e.target.value)}
                            />
                            <div
                                className="hover:bg-gray-200 rounded-lg p-2 cursor-pointer"
                                onClick={() => setFileName("")}
                            >
                                <X/>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full justify-center md:justify-end">
                        <div className="flex gap-4 flex-col md:flex-row w-full md:w-auto">
                            <button
                                className="bg-slate-300 hover:bg-slate-700 text-black font-bold py-2 px-6 rounded-full"
                                type="button"
                                onClick={() => {
                                    setSelectedFile(null);
                                    setFileName("");
                                }}
                            >
                                Batal
                            </button>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full"
                                type="button"
                                onClick={handleUpload}
                            >
                                Upload
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full">
                    <UploadBox onFileSelect={handleFileSelect}/>
                </div>
            </div>
        </div>

    );
};

export default Upload;