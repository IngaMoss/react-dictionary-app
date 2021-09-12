import React, { useState } from "react";
import axios from "axios";
import './Dictionary.css';

import Results from './Results';
import Photos from './Photos';

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionResponse(response) {
        setResults(response.data[0]);
    }
    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }
    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    function search() {
        // documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleDictionResponse);

        // documentation: https://www.pexels.com/api
        let pexelsApiKey = "563492ad6f91700001000001bad48d0c69e847deafdc45f64857cec2";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=8`;
        let headers = { "Authorization": `Bearer ${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
                <Photos photos={photos} />
            </div>);
    } else {
        load();
        return "";
    }
}
