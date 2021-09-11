import React from "react";
import './Meaning.css';

import Synonyms from './Synonyms';

export default function Meaning(props) {

    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function (definition, index) {
                return (
                    <div key={index}>
                        <p>
                            <strong>Definition: </strong><div className="Definition">{definition.definition}</div>
                            <strong>Example: </strong><div className="Example">"{definition.example}"</div>
                            <Synonyms synonyms={definition.synonyms} />
                        </p>
                    </div>
                );
            })}
        </div>
    );

}