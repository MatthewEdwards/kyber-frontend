import axios from "axios";

/*
	fetchArticles will contact the kyber-api and retrieve a list 
	of articles in JSON format
 */
export function fetchArticles() {
  return function(dispatch) {
    axios.get("http://localhost:8000/api/v1/articles")
      .then((response) => {
        dispatch({type: "FETCH_ARTICLES_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_ARTICLES_REJECTED", payload: err})
      })
  }
}