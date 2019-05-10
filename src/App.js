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
      sourcen: null,
    }
//this.componentDidMount = this.componentDidMount.bind(this);
  }
 // async handleSourceChange(url){

 //    const response2 = fetch(url2);
 //    const datas = response2.json();
 //    this.setState({articles: datas.articles, isLoading: false});
 //    console.log(datas.articles);
 //    this.render();
 //  }
 
  async componentDidMount(){

    // await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=90f3115a267341bca2b9fe69d0653820')
    //   .then(res => res.json())
    //   .then(json => {
    //     this.setState({
    //       isLoaded: true,
    //       items: json,
    //     })
    //   });
    // if(sourcen==null){

          const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=90f3115a267341bca2b9fe69d0653820';
      const response = await fetch(url);
      const data = await response.json();
  {/* Assigning the response received from the request into the articles array
      and setting the letting the render() know that we have successfully received response */}
      this.setState({articles: data.articles, isLoading: false });
      console.log(data.articles);

    // }else{

    //           const url = 'https://newsapi.org/v2/everything?domains=${sourcen}&apiKey=90f3115a267341bca2b9fe69d0653820'
    //                 const response = await fetch(url);
    //                       const data = await response.json();
    //         this.setState({articles: data.articles, isLoading: false });
    //               console.log(data.articles);

    
  // }
}
 

  render(){

        return (
          <div className="App">
      {/* Checking if the articles a response has been received for the request to NewsAPI*/}
          {this.state.isLoading || !this.state.articles ? (
            <p> Loading...</p>
            ): ( 

            <div>
            <img width="100px" height="100px" src="https://media.featuredcustomers.com/Company.logo/Chalhoub_Group.png"></img>
            <br></br>
            <br></br>
             <h1 id="maintitle">Chalhoub's Freshly Squeezed News!</h1>
<br></br><br></br>
             <div class="page-wrap">                

             <ul>
         {/* Goes through the articles array and prints the respective information of
             each article with its Title, Image, Description, Content(limited characters),
             and the Article Link for more content on that article */}
             {this.state.articles.map(article =>(
              <li class="main-content">
                <h1 class="titlee">{article.title}</h1>              
                  <img width="100%" height="100%" src={article.urlToImage}></img>

                <p class="desc"><strong>{article.description}</strong></p>
                <p class="cont">{article.content} <a class="link-style" href={article.url}>For more</a></p>
                              <br></br>

              </li> 
              ))}
             </ul>
              <br></br>

              <nav class="main-nav">
                <h2 id="nav-titlee">Source Category</h2>
                <ul>
            {/* Goes through the array of articles and displays all the different sources that are present */}
                {this.state.articles.map(article =>(
                  <li class="source-list"><br></br><a class="source-list" href="#">{article.source.name}</a><br></br>----------</li>
                  ))}
                </ul>

              </nav>
              
            </div>
                <p align="left">Chalhoub Front-End Engineer Intern Test --- Surya Kosaraju -- Mildly-Intelligent Poor Non-Philanthropic Goodguy</p>

</div>


        //Old method
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
