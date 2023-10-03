import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const DisplayWord = ({wordDetail}) => {
    const { word } = useParams();

    const data = useSelector((state) => state)

    if(word !== undefined){
        console.log('Started word')
        data.forEach(element => {
            if(element[0].word === word){
                wordDetail = element;
            }
        });
    }

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