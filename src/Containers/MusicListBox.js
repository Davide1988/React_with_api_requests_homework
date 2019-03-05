import React, { Component } from 'react';
import MakeSelctor from '../Components/MakeSelector'
import ArtistRender from '../Components/ArtistRender';

class MusicListBox extends Component{

    constructor(props){
        super(props);
        this.state = {
          music : [],
          artistSelected : null
        }
        this.handleTheSelectedArtist = this.handleTheSelectedArtist.bind(this)
      }
  
  
    componentDidMount(){
      const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
      fetch(url)
      .then(res => res.json())
      .then((data) => {
          this.setState({music: data.feed.entry})
      })
  }


    handleTheSelectedArtist(artistIndex){
        const artistObj = this.state.music[artistIndex]
        this.setState({artistSelected: artistObj})
    }


render(){
    return(
        <div>   
            <MakeSelctor musicList = {this.state.music} forSelection={this.handleTheSelectedArtist}/>
            <ArtistRender  artist={this.state.artistSelected}/>
        </div>
    )
}

}

export default MusicListBox;