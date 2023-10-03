import React from "react";
import DisplayWord from "./DisplayWord";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../redux/actions/dataAction";
import axios from "axios";
import Loader from "./Loader";

const Home = () => {

    const [word, setWord] = useState('')
    const [wordsDetail, setWordsDetail] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const dispatch = useDispatch()

    const searchWord = async() => {
        setIsLoading(true)
        try{
            const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            let wordList = response.data.map((element) => {
                return {
                    word: element.word,
                    phonetics: element.phonetics.map((phonetic) => {
                        return {
                            text: phonetic.text,
                            audio: phonetic.audio,
                        }
                    }),
                    meanings: element.meanings.map((meaning) => {
                        return {
                            partOfSpeech: meaning.partOfSpeech,
                            definations: meaning.definitions.map((definition) => {
                                return definition.definition
                            }),
                        }
                    }),
                }
            })
            dispatch(addData(wordList))
            setWordsDetail(wordList)
        }
        catch(err){
            console.log(err.message)
        }
        setIsLoading(false)
    }

    return  (
        <div className="home">
            {isLoading===true && <Loader/>}
            <div className="search-box">
                <input type="text" onChange={(e) => setWord(e.target.value)} placeholder="Search Word..!"/>
                <button onClick={searchWord}>Search</button>
            </div>
            { wordsDetail!=null && <DisplayWord wordDetail = {wordsDetail}/> }
        </div>
    )
}

export default Home;