import React from "react";
import './Synonyms.css';



export default function Synonyms(props) {
    if (props.synonyms) {
        return (
            <ul className="Synonyms">
                {props.synonyms.map(function (synonym, index) {
                    return <div className="List" key={index}>{synonym}</div >;
                }
                )}
            </ul>);
    } else {
        return null;
    }
}