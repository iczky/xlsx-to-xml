"use client"

import React from 'react';
import UploadBox from "@/components/UploadBox/UploadBox";
import DownloadFile from "@/components/DownloadFile/DownloadFile";
import useConvert from "@/hooks/useConvert";

const Main = () => {

    const {handleConvert, xml} = useConvert();

    return (
        <div className="h-full">
            <div className="flex flex-col gap-8 justify-center items-center">
                <h1>Excel to XML converter</h1>
                <UploadBox handleConvert={handleConvert} />
                <DownloadFile generated={xml}/>
            </div>
        </div>
    );
};

export default Main;