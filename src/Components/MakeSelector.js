import React, { Component } from 'react';


const MakeSelector = (props) => {

    const artists = props.musicList.map((object, index) =>{
        return <option value={index} key={index}>{object["im:artist"].label}</option>
    })
    

    function selected(e){
        const artistSelected = e.target.value
        props.forSelection(artistSelected)
    }


    return (

            <select defaultValue="default" onChange={selected}>
                <option disabled value="default">Select your fav artist</option>
                {artists}
            </select>
    )


}

export default MakeSelector;