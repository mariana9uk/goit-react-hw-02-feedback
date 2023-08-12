import { Stat } from './feedback.styled';
const countTotalFeedback = ({ good, neutral, bad }) => {
  return good + neutral + bad;
};

const countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
  const total = countTotalFeedback({ good, neutral, bad });
  return total ? ((good / total) * 100).toFixed(0) : 0;
};

export const Statistics = ({ stateData }) => {
  const totalFeedback = countTotalFeedback(stateData);
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage(stateData);
  return (
    <Stat>
      <span>Good:{stateData.good}</span>
      <span>Bad:{stateData.bad}</span>
      <span> Neutral:{stateData.neutral}</span>
      <span>Total:{totalFeedback}</span>
      <span>Positive feedback:{positiveFeedbackPercentage}%</span>
    </Stat>
  );
};
