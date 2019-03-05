import React, { Component } from 'react';


const ArtistRender = (props) =>{
    if (props.artist == null) return null;
    return(
        <div>
            <ul>
                <li>{"Category :"} {props.artist.category.attributes.term}</li>
                <li>{"Name :"} {props.artist["im:artist"].label}</li>
                <li>{"Song :"} {props.artist["im:name"].label}</li>
                <li>{"Release date :"} {props.artist["im:releaseDate"].attributes.label}</li>
                <p>{"Album pic :"}</p>
                <img src={props.artist["im:image"][1].label}></img>
            </ul>
        {console.log(props.artist)}
        </div>
    )

}

export default ArtistRender;