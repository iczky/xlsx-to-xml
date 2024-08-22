import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Main from "@/components/Main/Main";
import {DocProvider} from "@/context/DocContext";

export default function Home() {
    return (
        <>
            <DocProvider>
                <Navbar/>
                <Main/>
            </DocProvider>
        </>
    );
}
