"use client"

import React, {useEffect, useState} from 'react';
import {FileUploader} from "react-drag-drop-files";
import './classes.css'

const fileTypes = ["XLX", "XLSX", "XLS"];

const UploadBox = ({onFileSelect}) => {
    const handleChange = (file) => {
        onFileSelect(file)
    }
    return (
        <FileUploader
            name="converter"
            types={fileTypes}
            label="Tambahkan file disini"
            handleChange={handleChange}
            classes="custom-class"
        />
    );
};

export default UploadBox;