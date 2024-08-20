"use client"

import {useEffect, useState} from "react";
import readExcel from "@/utils/converter";

const useConvert = () => {
    const [xml, setXml] = useState("")

    const handleConvert = (input) => {
        readExcel(input, (e) => {
            setXml(e)
        })
    }

    useEffect(() => {

    }, [xml]);

    return {
        xml,
        handleConvert
    };
}

export default useConvert;