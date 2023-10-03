import React from "react";

const DisplayWord = ({wordDetail}) => {
    return (
        <div className="display-words">
            {
                wordDetail.map((word) => (
                    <div className="display-word">
                        <h2>{word.word}</h2>
                        {
                            word.phonetics.map((phonetic) => (
                                <div className="phonetic">
                                    <p>{phonetic.text}</p>
                                    <audio src={phonetic.audio} controls></audio>
                                </div>
                            ))
                        }
                        {
                            word.meanings.map((meaning) => (
                                <div className="meaning">
                                    <h3>{meaning.partOfSpeech}</h3>
                                    {
                                        meaning.definations.map((defination) => (
                                            <p>{defination}</p>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayWord;