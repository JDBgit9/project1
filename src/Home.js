import React, {useState, useEffect} from 'react';
import "./Home.css";
import $, { data } from "jquery";

function Home() {
    const [input, setInput]=useState("")
    const [photos, setPhotos]=useState()
    const flickrapi="75584617c10dcb6bdb5535174c472568"
    const flickrsecret="f36417ff7e60deac"
    const url=`https://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=${flickrapi}&jsoncallback=?`
    const options={tags: input, format: "json"}
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(input)
        $.getJSON(url, options, displayPhotos)
    }
    const displayPhotos=(data)=>{console.log(data)}
    useEffect(()=>console.log(photos),[photos])
    return (
        <div className="home">
            <h1>Photo Search</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="search for photos" onChange={(e)=> setInput(e.target.value)} value={input}/>
            <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Home