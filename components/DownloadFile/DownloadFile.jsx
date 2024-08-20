"use client"

import React, {useEffect} from 'react';

const DownloadFile = ({generated}) => {
    const downloadXmlFile = () => {
        const blob = new Blob([generated], { type: "application/xml" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "coverted.xml";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    useEffect(() => {
        console.log({ generated });
    }, [generated]);

    return (
        <div>
            {generated && (
                <button
                    onClick={downloadXmlFile}
                    className="text-white bg-gray-600"
                >
                    Download XML
                </button>
            )}
        </div>
    );
};

export default DownloadFile;