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
            action: "Uploaded",
        };

        setData([...data, newDocument]);
        setFileName(""); // Clear the file name after upload
        setSelectedFile(null); // Clear the selected file after upload
    };

    return (
        <div className="p-4 mx-40 border-2 border-gray-200 flex flex-col justify-center gap-4">
            <div className="flex justify-between p-2 border-b-2 border-gray-200">
                <h1>Upload File Excel</h1>
                <X/>
            </div>
            <div className="grid grid-cols-2 gap-4 p">
                <div className="grid gap-8">
                    <div className="flex w-full justify-end">
                        <div className="flex gap-2 w-1/2 justify-end items-center">
                            <input className="p-2 rounded-t-lg rounded-b-md bg-gray-300 w-full pr-8"
                                   placeholder="Masukkan judul kegiatan"
                                   value={fileName}
                                   onChange={(e) => setFileName(e.target.value)}
                            />
                            <div className="hover:bg-gray-200 rounded-lg p-2" onClick={() => setFileName("")}>
                                <X/>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full justify-end">
                        <div className="flex gap-4">
                            <button
                                className="bg-slate-300 hover:bg-slate-700 text-black font-bold py-2 px-6 rounded-full"
                                type="button"
                                onClick={() => {
                                    setSelectedFile(null);
                                    setFileName("");
                                }}
                            >Batal
                            </button>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full"
                                type="button"
                                onClick={handleUpload}
                            >Upload
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full">
                    <UploadBox onFileSelect={handleFileSelect} />
                </div>
            </div>
        </div>
    );
};

export default Upload;