import React from "react"
import ArticleList from '../containers/articles';
import Navigation from '../containers/Navigation'
import Footer from '../containers/Footer'
import Header from '../containers/Header'

export default class App extends React.Component{
 render(){
 	return(
 		<div>
 			<Header />
 			<ArticleList />
 			<Navigation />
 			<Footer />
 		</div>
 	);
  	
  }

}
