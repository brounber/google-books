import React from "react";
import styles from "./App.module.scss";

import { useState, useEffect} from "react";



const App = () => {
  const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q="
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey,setApiKey] = useState("AIzaSyCr5E_wyvVpvM0ZPzgGjkBzP-q0M40240g")
  
  const getbooks = async (book) => {
    const response = await fetch(
      `${BASE_URL}${book}&key=${apiKey}&maxResults=40`,
    );
    const data = await response.json();
    setResult(data.data);
};

  useEffect(() => {
    getbooks(book);
  }, [book]);
  

  function handleChange(event){

    const book = event.target.value;

    setBook(book);

  }

  function handleSubmit(event) {

    event.preventDefault();

    setBook(book);

  }

  return (
    <div className={styles.container}>
      <h1>Book Search App</h1>
    <form onSubmit={handleSubmit}>
      <div className={styles.container_Form}>
        <input type="text" onChange={handleChange} className={styles.container_SearchBar} placeholder="Search for Books">
        </input>
      </div>
      <button type="submit" className={styles.container_Button}>
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