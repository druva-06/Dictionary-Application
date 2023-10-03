import React from "react";

const DisplayWord = ({wordDetail}) => {
    return (
        <div className="display-word">
            <h2>{wordDetail.word}</h2>
            <p>{wordDetail.phonetic}</p>
            <audio src={wordDetail.audio} controls></audio>
            <h3>noun</h3>
            {
                wordDetail.nounDefinations.map((defination) => (
                    <p>{defination}</p>
                ))
            }
            <h3>verb</h3>
            {
                wordDetail.verbDefinitions.map((defination) => (
                    <p>{defination}</p>
                ))
            }
        </div>
    )
}

export default DisplayWord;