"use client"

import React, {useEffect, useState} from 'react';
import {FileUploader} from "react-drag-drop-files";

const fileTypes = ["XLX", "XLSX", "XLS"];

const UploadBox = ({handleConvert}) => {
    const [files, setFiles] = useState()

    const handleChange = (file) => {
        setFiles((prevState) => file)
    }

    const handleClick = (e) => {
        e.preventDefault();
        handleConvert(files);
    }

    useEffect(() => {

    }, [files]);

    return (
        <>
            <form name="converter">
                <FileUploader
                    name="converter"
                    types={fileTypes}
                    label="Tambahkan file disini"
                    handleChange={handleChange}
                />
                <div className="flex justify-center">
                    <button
                        type="submit"
                        onClick={(e) => handleClick(e)}
                        className="button"
                    >
                        Convert
                    </button>
                </div>
            </form>
        </>
    );
};

export default UploadBox;