import React from "react";

const CardTable = () => {
    const cards = [
        {
            name: "Kuriboh",
            image: "https://cdn.formatlibrary.com/images/medium_cards/40640057.jpg",
            attributes: [
                {
                    icon: "https://cdn.formatlibrary.com/images/symbols/dark.png",
                    text: "DARK",
                },
                {
                    icon: "https://cdn.formatlibrary.com/images/symbols/star.png",
                    text: "Lv1",
                },
                {
                    icon: "https://cdn.formatlibrary.com/images/symbols/fiend.png",
                    text: "Fiend",
                },
            ],
            stats: { atk: 300, def: 200 },
            link: "/cards/kuriboh",
        },
        {
            name: "Winged Kuriboh",
            image: "https://cdn.formatlibrary.com/images/medium_cards/57116033.jpg",
            attributes: [
                {
                    icon: "https://cdn.formatlibrary.com/images/symbols/light.png",
                    text: "LIGHT",
                },
                {
                    icon: "https://cdn.formatlibrary.com/images/symbols/star.png",
                    text: "Lv1",
                },
                {
                    icon: "https://cdn.formatlibrary.com/images/symbols/fairy.png",
                    text: "Fairy",
                },
            ],
            stats: { atk: 300, def: 200 },
            link: "/cards/winged-kuriboh",
        },
    ];

    return (
        <div id="card-table">
            <table id="cards">
                <tbody>
                    {cards.map((card, index) => (
                        <tr
                            key={card.name}
                            className={index % 2 === 0 ? "even-search-results-row" : "odd-search-results-row"}
                        >
                            <td className="no-padding-2" style={{ verticalAlign: "top" }}>
                                <a
                                    className="search-results-link"
                                    rel="noopener noreferrer"
                                    href={card.link}
                                    target="_blank"
                                >
                                    <div className="card-image-cell">
                                        <img
                                            className="card-image"
                                            src={card.image}
                                            style={{ width: "82px" }}
                                            alt={card.name}
                                        />
                                    </div>
                                </a>
                            </td>
                            <td className="no-padding-2" style={{ verticalAlign: "top" }}>
                                <a
                                    className="search-results-link"
                                    rel="noopener noreferrer"
                                    href={card.link}
                                    target="_blank"
                                >
                                    <table className="inner-cardRow-table">
                                        <tbody>
                                            <tr>
                                                <th
                                                    colSpan="5"
                                                    style={{
                                                        textAlign: "left",
                                                        fontSize: "24px",
                                                        borderBottom: "2px solid rgb(207, 220, 229)",
                                                    }}
                                                >
                                                    {card.name}
                                                </th>
                                            </tr>
                                            <tr>
                                                {card.attributes.map((attr, attrIndex) => (
                                                    <td
                                                        key={attrIndex}
                                                        height="25px"
                                                        width="120px"
                                                        style={{
                                                            borderRight: "2px solid rgb(207, 220, 229)",
                                                        }}
                                                    >
                                                        <img
                                                            src={attr.icon}
                                                            height="24px"
                                                            style={{ verticalAlign: "middle" }}
                                                            alt="symbol"
                                                        />{" "}
                                                        {attr.text}
                                                    </td>
                                                ))}
                                                <td
                                                    height="25px"
                                                    width="100px"
                                                    style={{
                                                        borderRight: "2px solid rgb(207, 220, 229)",
                                                    }}
                                                >
                                                    ATK: {card.stats.atk}
                                                </td>
                                                <td
                                                    height="25px"
                                                    width="100px"
                                                    style={{
                                                        borderRight: "2px solid rgb(207, 220, 229)",
                                                    }}
                                                >
                                                    DEF: {card.stats.def}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CardTable;
