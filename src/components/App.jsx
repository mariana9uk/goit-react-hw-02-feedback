import { Component } from 'react';
import { Statistics } from './Sattistic';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClick = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          <Section
            title={'Please, leave feedback'}
            children={<FeedbackOptions onLeaveFeedback={this.handleClick} />}
          />
          <Section
            title={'Statistics'}
            children={<Statistics stateData={this.state} />}
          />
        </div>
      </div>
    );
  }
}
