import React from 'react';



export default function PrimerComponente(props) {
    return(
        <div class="container">
            <img src={props.url} alt=""></img> 
            <div class="textContainer">
                <h1>{props.title}</h1>
                <h4>{props.description}</h4>
            </div>
        </div>
        
    );
}