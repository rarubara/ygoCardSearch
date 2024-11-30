import React, { useState, useEffect } from "react";
import { Table, TableBody, TableRow, TableHead, TableCell, TableHeader, TableCaption } from "../ui/table";
import axios from "axios";

const CardTable = ({ searchQuery }) => {
    // State to store cards fetched from API
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true); // State for loading indicator
    const [error, setError] = useState(null); // State for error handling

    // Fetch data from API using Axios
    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await axios.get("https://api.npoint.io/05f3068bb73af58c01f5");
                setCards(response.data); // Store the fetched data in the state
            } catch (err) {
                setError(err.message); // Handle any error that might occur
            } finally {
                setLoading(false); // Set loading to false once the request is complete
            }
        };

        fetchCards(); // Call the fetch function
    }, []); // Empty array to fetch the data only once on component mount

    // Filter cards based on the searchQuery
    const filteredCards = cards.filter((card) =>
        card.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Handle loading and error states
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="max-w-full mx-auto px-4 py-6">            
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
                                        <span className="text-lg font-bold">{card.name}</span>
                                        <img
                                            src={card.imageUrl}
                                            alt={card.name}
                                            className="w-20 h-auto"
                                        />
                                    </TableCell>
                                    <TableCell className="p-2 flex items-center gap-2 border-r">
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
                                        {card.attributes.category}
                                    </TableCell>
                                    <TableCell className="p-2 border-r">
                                        ATK: {card.attributes.atk}
                                    </TableCell>
                                    <TableCell className="p-2">DEF: {card.attributes.def}</TableCell>
                                </TableRow>
                                <TableRow>
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
