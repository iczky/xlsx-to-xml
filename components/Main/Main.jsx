"use client"

import React, {useState} from 'react';
import useConvert from "@/hooks/useConvert";
import Upload from "@/components/Upload/Upload";
import DocList from "@/components/DocList/DocList";

const Main = () => {
    return (
        <div className="flex flex-col gap-8 min-h-screen w-full p-4">
            <Upload/>
            <DocList/>
        </div>
    );
};

export default Main;