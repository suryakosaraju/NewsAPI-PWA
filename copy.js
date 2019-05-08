import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//        <img src={logo} className="App-logo" alt="logo" />


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      articles: [ ],
      isLoading: true,
    }
  }
  async componentDidMount(){

    // await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=90f3115a267341bca2b9fe69d0653820')
    //   .then(res => res.json())
    //   .then(json => {
    //     this.setState({
    //       isLoaded: true,
    //       items: json,
    //     })
    //   });


      const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=90f3115a267341bca2b9fe69d0653820';
      const response = await fetch(url);
      const data = await response.json();
      this.setState({articles: data.articles, isLoading: false });
      console.log(data.articles);
  }
 

  render(){

    var {isLoading, articles} = this.state;

        return (
          <div className="App">
          {this.state.isLoading || !this.state.articles ? (
            <p> Loading...</p>
            ): (  
            <div>
            <img width="100px" height="100px" src="https://media.featuredcustomers.com/Company.logo/Chalhoub_Group.png"></img>
             <h3>Chalhoub's Freshly Squeezed News!</h3>

             <div class="page-wrap">                

             <ul>
             {this.state.articles.map(article =>(
              <li class="main-content">
                <h1 class="titlee">{article.title}</h1>              
                  <img width="100%" height="100%" src={article.urlToImage}></img>

                <p class="desc"><strong>{article.description}</strong></p>
                <p class="cont">{article.content} <a href={article.url}>For more</a></p>
                              <br></br>

              </li> 
              ))}
             </ul>
              <br></br>

              <nav class="main-nav">
                <h2>Source Category</h2>
                <ul >
                {this.state.articles.map(article =>(
                  <li class="source-list"><br></br><a class="source-list" href=" ">{article.source.name}</a><br></br>----------</li>
                  ))}
                </ul>
              </nav>
              
            </div>
</div>
            // <div>
            //  <h3>Freshly brewed News!</h3>
            //   <ul>
            //      {this.state.articles.map(article =>(

            //          <li key={article.source.key}>
            //          Name: {article.title}
            //          <br></br>
            //         <a href={article.url}> <img width="200px" height="150px" src={article.urlToImage}></img></a><br></br>
            //          Source: {article.source.name}
            //                              <br></br>
            //          <br></br>

            //          </li>
            //        ))}
            //    </ul>   
            //                <p align="left">Chalhoub Front-End Engineer Intern Test --- Surya Kosaraju -- Genius Poor Non-philanthropic Goodguy</p>
            // </div>

            )}

          </div>

        );
   
  }
}

export default App;
