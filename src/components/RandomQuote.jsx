import React from 'react';
import axios from 'axios';
  
  
class RandomQuote extends React.Component {
    constructor(){
        super()
    
    this.state ={advice: ''};
    }
    componentDidMount(){
        this.fetchAdvice();
    }
  
    
    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) =>  {
            const {advice} = response.data.slip;
            console.log(response.data)
            this.setState({advice});
        })
  
        .catch ((error) => {
            console.log(error);
        })
    }

    render() {
        const {advice} = this.state;
  
        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">
                      {advice}
                    </h1>
                    <button className="button" onClick=
                     {this.fetchAdvice}>
                        <span>Give Me Advice</span>
                    </button>
                </div>
            </div>
        );
    }
}
  
export default RandomQuote;