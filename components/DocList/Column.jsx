import {Button} from "@/components/ui/button";
import {ArrowUpDown} from "lucide-react";

export const columns = [
    {
        accessorKey: "name",
        header: "Nama",
    },
    {
        accessorKey: "document",
        header: "Dokumen",
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
    },
]