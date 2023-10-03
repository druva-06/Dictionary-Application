import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const History = () => {

    const data = useSelector((state) => state)

    console.log(data)

    return (
        <div className="history">
            <div className="search-history">
                <h2 className="title">Search History</h2>
                <div className="history-list">
                    {
                        data.map((word) => (
                            <Link to={`/word/${word[0].word}`}>{word[0].word}</Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default History;