import { Component } from 'react';
import { Statistics } from './Sattistic';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';

export class Feedback extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClick = type => {
    this.setState(prevState=>{
        return {
            [type]: prevState[type]+1
        }
    })
  };
  
  render() {

    return (
      <div>
        <Section title={'Please, leave feedback'}/>
      <FeedbackOptions onLeaveFeedback={this.handleClick}/>
      <Section title={'Statistics'}/>
         <Statistics stateData={this.state}/>
      </div>
    );
  }
}
