import React, {Component} from 'react';
import QuoteBox from './QuoteBox/QuoteBox';
import './App.css';
import quotes from './QuoteBox/quotes';

class App extends Component {
  //Setting up the constructor function so we can set our default state
  constructor(props){
    super(props);
    //Set the first quote and author as our default state
    this.state= {
      quote: quotes[0].quote,
      author: quotes[0].author
    }
  }
  render() {
    console.log(quotes[0].author);
    console.log(quotes[0].quote);
    return (
      <div>
        <QuoteBox 
        quote={this.state.quote}
        author={this.state.author}
        />
      </div>
    );
  }
}

export default App;
