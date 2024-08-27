import {Button} from "@/components/ui/button";
import {ArrowUpDown} from "lucide-react";
import Converter from "@/utils/xml/converter";
import soapRequest from "@/utils/soap/send_soap_request";

export const columns = [
    {
        accessorKey: "name",
        header: "Nama",
    },
    {
        accessorKey: "document",
        header: "Dokumen",
        enableColumnFilter: true,
        cell: ({ row }) => (
            <a
            href={URL.createObjectURL(row.original.file)}
            download={row.original.document}
            className="text-blue-500 hover:underline">
                {row.original.document}
            </a>
        )
    },
    {
        accessorKey: "upload_date",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                    Tanggal Upload
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        }
    },
    {
        accessorKey: "sent_date",
        header: "Tanggal Kirim",
    },
    {
        accessorKey: "action",
        header: "Action",
        cell: ({ row }) => {
            const handleService = async () => {
                try {
                    // Instantiate the Converter with the file
                    const converter = new Converter(row.original.file);

                    // Convert the file and send the SOAP request
                    converter.convert(async (xmlData) => {
                        const response = await soapRequest(xmlData);
                        console.log("SOAP Response:", response.data);
                        alert("File sent successfully!");
                    });
                } catch (error) {
                    console.error("Error sending file:", error);
                    alert("Failed to send file.");
                }
            }
            return (
                <Button variant="outline" onClick={handleService}>
                    Send
                </Button>
            )
        }
    },
]