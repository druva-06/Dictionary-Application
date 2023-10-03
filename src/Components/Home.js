import React from "react";
import DisplayWord from "./DisplayWord";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addData } from "../redux/actions/dataAction";

const Home = () => {

    const [word, setWord] = useState('')

    const data = useSelector((state) => state)
    console.log(data)
    const dispatch = useDispatch()

    const searchWord = async() => {

        dispatch(addData(word))
    }

    let history = {
        id: 1,
        word: 'experience',
        phonetic: "/ɪkˈspɪə.ɹɪəns/",
        audio: "https://api.dictionaryapi.dev/media/pronunciations/en/experience-uk.mp3",
        nounDefinations: ["The effect upon the judgment or feelings produced by any event, whether witnessed or participated in; personal and direct impressions as contrasted with description or fancies; personal acquaintance; actual enjoyment or suffering", "An activity one has performed."],
        verbDefinitions: ["To observe certain events; undergo a certain feeling or process; or perform certain actions that may alter one or contribute to one's knowledge, opinions, or skills.","To observe certain events; undergo a certain feeling or process; or perform certain actions that may alter one or contribute to one's knowledge, opinions, or skills."]
    }
    let historys = [history,history];

    return  (
        <div className="home">
            <div className="search-box">
                <input type="text" onChange={(e) => setWord(e.target.value)} placeholder="Search Word..!"/>
                <button onClick={searchWord}>Search</button>
            </div>
            <div className="search-item">
                {
                    historys.map((history) => (
                        <DisplayWord
                            wordDetail = {history}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Home;