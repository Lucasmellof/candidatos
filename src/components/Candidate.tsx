import React, {HTMLAttributes} from "react";

import {CandidateInfo} from "../data/info";
import {createColumnHelper, flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import clsx from "clsx";

interface PropsCandidate extends HTMLAttributes<HTMLDivElement> {
    candidates: CandidateInfo[];
    tableStyle?: string;
}

const columnHelper = createColumnHelper<CandidateInfo>()

export const Candidate = ({candidates, tableStyle, ...rest}: PropsCandidate) => {
    const columns: any = [
        columnHelper.accessor("name", {
            header: "Nome",
            cell: (info) => info.getValue()
        }),
        columnHelper.accessor("votes", {
            header: "Votos",
            cell: (info) => Intl.NumberFormat("pt-BR").format(info.getValue())
        }),
        columnHelper.accessor("party", {
            header: "Partido",
            cell: (info) => info.getValue()
        })
    ];

    const table = useReactTable({
        data: candidates.sort((a, b) => a.sequence - b.sequence),
        columns,
        getCoreRowModel: getCoreRowModel()
    });

    return <div {...rest} className="overflow-x-auto">
        <table className={clsx("table table-zebra w-full", tableStyle)}>
            <thead>
            {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                        <th key={header.id} className="text-lg bg-[#661AE6]">
                            {header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                )}
                        </th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody>
            {table.getRowModel().rows.map(row => (
                <tr key={row.id} className="hover">
                    {row.getVisibleCells().map(cell => (
                        <td key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    </div>
};