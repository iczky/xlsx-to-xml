"use client";

import Converter from "@/utils/xml/converter";
import { useEffect, useState } from "react";

const useConvert = () => {
  const [xml, setXml] = useState("");

  const handleConvert = (input) => {
    const converter = new Converter(input);
    converter.convert((xmlData) => {
      setXml(xmlData);
    });
  };

  useEffect(() => {}, [xml]);

  return {
    xml,
    handleConvert,
  };
};

export default useConvert;
