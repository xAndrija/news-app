import React from "react";
import Card from "./Card";

function NewsList({ newsArray }) {
    return (
        <>
            {newsArray.map((news, index) => (
                <Card key={index} news={news} index={index} />
            ))}
        </>
    );
}

export default NewsList;