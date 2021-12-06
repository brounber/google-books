

import React from "react";
import axios from "axios";
//import styles from "./App.module.scss";

import { useState, } from "react";



const App = () => {

  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey,setApiKey] = useState("AIzaSyCr5E_wyvVpvM0ZPzgGjkBzP-q0M40240g")
  
  

  function handleChange(event){

    const book = event.target.value;

    setBook(book);

  }

  function handleSubmit(event) {

    event.preventDefault();

    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}&maxResults=40`).then(data => {
      setResult(data.data.items);
    })

  }

  return (
    <div className="container">
      <h1>Book Search App</h1>
    <form onSubmit={handleSubmit}>
      <div className="container_Form">
        <input type="text" onChange={handleChange} className="container_SearchBar" placeholder="Search for Books">
        </input>
      </div>
      <button type="submit" className="container_Button">
      Google Search
      </button>
    </form>

    {result.map(book => (<a href={book.volumeInfo.previewLink}><img src={book.volumeInfo.imageLinks === undefined
        ? ""
        : `${book.volumeInfo.imageLinks.thumbnail}`} alt={book.title}/></a>))};
  </div>
  )
  

}
export default App;

