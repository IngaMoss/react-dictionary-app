import React, { useState } from "react";
import axios from "axios";
import './Dictionary.css';

import Results from './Results';

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setResults(response.data[0]);
    }
    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    function search() {
        // documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }
    function load() {
        setLoaded(true);
        search();
    }
    if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                    <h1>What do you looking for?</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="search" placeholder={props.defaultKeyword} onChange={handleKeywordChange} />
                    </form>
                    <div className="hint">
                        Suggested words: sunset, declaration, forest, yoga etc.
                    </div>
                </section>
                <Results results={results} />
            </div>);
    } else {
        load();
        return "";
    }
}
