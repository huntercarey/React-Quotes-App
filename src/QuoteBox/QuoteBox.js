import React, {Component} from 'react';
import quotes from './quotes';

class QuoteBox extends Component {
    render() {

        //set the background-color of the HTML element to the random color that is passed in as a prop
        const html = document.documentElement; //html element
        html.style.backgroundColor = this.props.color;

        return(
            <div>
                <div className='quoteBox'>
                    <div className='insideBox'>
                        <h1 style={{color: this.props.color}}>{this.props.quote}</h1>
                        <em><h2 style={{color: this.props.color}}>-{this.props.author !== '' ? this.props.author : 'Unknown'}</h2></em>
                    </div>
                </div>
                <button onClick={this.props.handleClick}>New Quote</button>
            </div>
        );
    }
}

export default QuoteBox;