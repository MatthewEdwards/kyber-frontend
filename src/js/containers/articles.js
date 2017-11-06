import React from 'react';
import { connect } from "react-redux"
import moment from 'moment'

import { fetchArticles } from "../actions/articleActions"

/*
  Each Article component contains the Title, URL, and Date
  of the article and moment.js is used to display the ammount
  of time past since the article was posted 
 */
class ArticleList extends React.Component{
  	render() {
    	const { articles } = this.props;
   
    	if(!articles.length){
      		this.fetchArticles()
    	}

	    const mappedArticles = articles.map(article =>
          <article class="media" key={article.ID}>
              <div class="media-content">   
                <div class="content">
                  <h4 class="subtitle is-4">{article.Title}</h4>
                  <p>
                  {article.Title}
                  <br/>
                  <a href={article.URL}> Read Article</a>
                  
                  </p>
                </div>
                <nav class="level">
                  <div class="level-left">
                    <a class="level-item">
                      <span class="icon is-small"><i class="fa fa-info"></i></span>
                    </a>
                    <a class="level-item">
                      <span class="icon is-small"><i class="fa fa-times"></i></span>
                    </a>
                  </div>
                  <span class="tag is-info article-date"><small>{moment(article.Date).fromNow()}</small></span>
                </nav>
            </div>
        </article>
      )

      return (
        <section class="section main">
          <div class="container ">
            
            <div class="columns">
              <div class="column">
                
                <div class="box">
          		    {mappedArticles}
                </div>
              
              </div>
        	  </div>
          </div>
        </section>
      );
  	}

  	fetchArticles() {
    	this.props.dispatch(fetchArticles())
  	}
}

function mapStateToProps(store){
	return{
		articles: store.articles.articles
	}
}

export default connect(mapStateToProps)(ArticleList);