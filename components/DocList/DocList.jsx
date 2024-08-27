"use client"

import React, {useContext} from 'react';
import DataTable from "@/components/DocList/DataTable";
import {columns} from './Column'
import {DocContext} from "@/context/DocContext";

const DocList = () => {
    const {data} = useContext(DocContext);
    return (
        <div className="p-4 mx-4 md:mx-10 lg:mx-40 border-2 border-gray-200 flex flex-col justify-center gap-4">
            <DataTable columns={columns} data={data}/>
        </div>
    );
};

export default DocList;