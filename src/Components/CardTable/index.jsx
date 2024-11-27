import React from "react";
import { Table, TableBody, TableRow, TableHead, TableCell, TableHeader, TableCaption } from "../ui/table";

const CardTable = ({ searchQuery }) => {
    // Example dataset (replace with actual data from props or API)
    const cards = [
        {
            name: "Bickuribox",
            releaseDate: "2002-06-26",
            imageUrl: "https://cdn.formatlibrary.com/images/medium_cards/25655502.jpg",
            attributes: {
                type: "DARK",
                level: 7,
                category: "Fiend / Fusion",
                atk: 2300,
                def: 2000,
            },
            description: `"Crass Clown" + "Dream Clown"`,
        },
        // Add more cards as needed
    ];

    // Filter cards based on searchQuery
    const filteredCards = cards.filter((card) =>
        card.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="max-w-full mx-auto px-4 py-6">
            <p>Search Query: {searchQuery}</p> {/* Display the search query */}
            <Table className="w-full border border-gray-300 rounded-lg">
                <TableCaption>Cards found</TableCaption>
                <TableHeader>
                    <TableRow className="border-b">
                        <TableCell colSpan={2} className="text-lg font-bold">
                            Card Name
                        </TableCell>
                        <TableCell colSpan={3} className="text-right text-gray-500">
                            Release Date
                        </TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredCards.length > 0 ? (
                        filteredCards.map((card, index) => (
                            <React.Fragment key={index}>
                                <TableRow>
                                    <TableCell rowSpan={2} className="p-2">
                                        <img
                                            src={card.imageUrl}
                                            alt={card.name}
                                            className="w-20 h-auto"
                                        />
                                    </TableCell>
                                    <TableCell className="p-2 flex items-center gap-2 border-r">
                                        <img
                                            src="https://cdn.formatlibrary.com/images/symbols/dark.png"
                                            alt={card.attributes.type}
                                            className="w-6 h-6"
                                        />
                                        {card.attributes.type}
                                    </TableCell>
                                    <TableCell className="p-2 flex items-center gap-2 border-r">
                                        <img
                                            src="https://cdn.formatlibrary.com/images/symbols/star.png"
                                            alt={`Level ${card.attributes.level}`}
                                            className="w-6 h-6"
                                        />
                                        Level {card.attributes.level}
                                    </TableCell>
                                    <TableCell className="p-2 flex items-center gap-2 border-r">
                                        <img
                                            src="https://cdn.formatlibrary.com/images/symbols/fiend.png"
                                            alt={card.attributes.category}
                                            className="w-6 h-6"
                                        />
                                        {card.attributes.category}
                                    </TableCell>
                                    <TableCell className="p-2 border-r">
                                        ATK: {card.attributes.atk}
                                    </TableCell>
                                    <TableCell className="p-2">DEF: {card.attributes.def}</TableCell>
                                </TableRow>
                                <TableRow className="hidden md:table-row">
                                    <TableCell colSpan={5} className="p-2 text-center italic text-gray-500">
                                        {card.description}
                                    </TableCell>
                                </TableRow>
                            </React.Fragment>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={6} className="p-4 text-center text-gray-500">
                                No cards found matching "{searchQuery}"
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default CardTable;
