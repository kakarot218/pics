//Event handler watch the video
//Here we want our App component to manage other tasks so we want it to handle fetching images so that is why we fetched the requested data back to the parent component.
//Mimp to understand the keyword this and http request and async await.

import React from "react";
import unsplash from "../api/unsplash"
import SearchBar from "./SearchBar.js";
import ImageList from "./ImageList";

// console.log(axios);


class App extends React.Component {

    state = { images : []};

    onSearchSubmit= async (term) => {     //Query why do we use async await. async onSearchSubmit(terms) {} is similar to like this.
        const response = await unsplash.get("https://api.unsplash.com/search/photos",{
            params : {
                query : term
            }
        });

        // console.log(this);  // We have seen this error before. here value of this is not what we want.Here props object from the searchBar calls onSubmit of APp componenet so here this refers to props.
        this.setState({ images : response.data.results });
    }

    render(){

        return(
            <div className="ui container" style={{marginTop : '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} guessMe = "I am iron man"/>
                <ImageList images={this.state.images}/>
            </div>

        )
    }

};

export default App;
