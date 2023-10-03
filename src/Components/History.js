import React from "react";
import { Link } from "react-router-dom";

const History = () => {

    let history = {
        id: 1,
        word: 'experience',
        phonetic: "/ɪkˈspɪə.ɹɪəns/",
        audio: "https://api.dictionaryapi.dev/media/pronunciations/en/experience-uk.mp3",
        nounDefinations: ["The effect upon the judgment or feelings produced by any event, whether witnessed or participated in; personal and direct impressions as contrasted with description or fancies; personal acquaintance; actual enjoyment or suffering", "An activity one has performed."],
        verbDefinitions: ["To observe certain events; undergo a certain feeling or process; or perform certain actions that may alter one or contribute to one's knowledge, opinions, or skills.","To observe certain events; undergo a certain feeling or process; or perform certain actions that may alter one or contribute to one's knowledge, opinions, or skills."]
    }
    let historys = [history,history,history];

    return (
        <div className="history">
            <div className="search-history">
                <h2 className="title">Search History</h2>
                <div className="history-list">
                    {
                        historys.map((history) => (
                            <Link to={`/word/${history.word}`} key={history.id}>{history.word}</Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default History;