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

  //Create a function called getRandomQuote that returns a random quote from the array of quotes.
  getRandomQuote = () => {
    const randomNum = Math.round(Math.random() * (quotes.length));
    return quotes[randomNum];
  }

  //function that will be called when the new quote button on the QuoteBox component is pressed.
  handleClick = () => {
    //Generate a random quote
    const randomQuote = this.getRandomQuote();
    //Update our state with information from that random quote
    this.setState({
      quote: randomQuote.quote,
      author: randomQuote.author
    });
  }

  render() {
    return (
      <div>
        <QuoteBox 
        quote={this.state.quote}
        author={this.state.author}
        handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
