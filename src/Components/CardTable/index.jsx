import React from "react";
import {Table, TableBody, TableRow, TableHead, TableCell, TableHeader, TableFooter, TableCaption} from "../ui/table";

const CardTable = () => {
    return(
        <div className="max-w-full mx-auto px-4 py-6">
            <Table className="w-full border border-gray-300 rounded-lg">
            <TableCaption>Cards found</TableCaption>        
                <TableHeader>
                    <TableRow className="border-b">                    
                        <TableCell colSpan={2} className="text-lg font-bold">
                            Bickuribox
                        </TableCell>
                        <TableCell colSpan={3} className="text-right text-gray-500">
                            TCG Release: 2002-06-26
                        </TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell rowSpan={2} className="p-2">
                        <img
                            src="https://cdn.formatlibrary.com/images/medium_cards/34853266.jpg"
                            alt="Bickuribox"
                            className="w-20 h-auto"
                        />
                        </TableCell>
                        <TableCell className="p-2 flex items-center gap-2 border-r">
                        <img
                            src="https://cdn.formatlibrary.com/images/symbols/dark.png"
                            alt="DARK"
                            className="w-6 h-6"
                        />
                        DARK
                        </TableCell>
                        <TableCell className="p-2 flex items-center gap-2 border-r">
                        <img
                            src="https://cdn.formatlibrary.com/images/symbols/star.png"
                            alt="Level 7"
                            className="w-6 h-6"
                        />
                        Level 7
                        </TableCell>
                        <TableCell className="p-2 flex items-center gap-2 border-r">
                        <img
                            src="https://cdn.formatlibrary.com/images/symbols/fiend.png"
                            alt="Fiend / Fusion"
                            className="w-6 h-6"
                        />
                        Fiend / Fusion
                        </TableCell>
                        <TableCell className="p-2 border-r">ATK: 2300</TableCell>
                        <TableCell className="p-2">DEF: 2000</TableCell>
                    </TableRow>
                    <TableRow className="hidden md:table-row">
                        <TableCell colSpan={5} className="p-2 text-center italic text-gray-500">
                        "Crass Clown" + "Dream Clown"
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default CardTable;
