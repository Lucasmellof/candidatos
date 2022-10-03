import React, {HTMLAttributes} from "react";

import {CandidateInfo} from "../data/info";
import {createColumnHelper, flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";

interface PropsCandidate extends HTMLAttributes<HTMLDivElement> {
    candidates: CandidateInfo[];
}

const columnHelper = createColumnHelper<CandidateInfo>()

export const Candidate = ({candidates, ...rest}: PropsCandidate) => {
    const columns: any = [
        columnHelper.accessor("name", {
            header: "Nome",
            cell: (info) => info.getValue()
        }),
        columnHelper.accessor("votes", {
            header: "Votos",
            cell: (info) => info.getValue()
        }),
        columnHelper.accessor("party", {
            header: "Partido",
            cell: (info) => info.getValue()
        })
    ];

    const table = useReactTable({
        data: candidates.sort((a,b) => a.sequence - b.sequence),
        columns,
        getCoreRowModel: getCoreRowModel()
    });

    return <div {...rest} className="overflow-x-auto">
        <table className="table table-zebra w-full">
            <thead>
            {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                        <th key={header.id}>
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
                <tr key={row.id}>
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
/* {candidates?.sort((a, b) => a.sequence - b.sequence).map((candidate) => (
            <div className="flex flex-row" key={candidate.number}>
                <p className="mx-4">{candidate.name}</p>
                <p className="mx-4">{candidate.number}</p>
                <p className="mx-4">{candidate.votes}</p>
                <p className="mx-4">{candidate.vote_percentage}</p>
                <p className="mx-4">{candidate.vice_president}</p>
            </div>
        ))} */