import React, { useState } from "react";
import {Statistic} from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export  default function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleAddFeedback = (option) => {
    if (option === 'good') {
      setGood(prevGood => prevGood + 1);
    } else if (option === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
    } else if (option === 'bad') {
      setBad(prevBad => prevBad + 1);
    }};

    const countTotalFeedback = () => {
    return good + neutral + bad;};

    const countPositiveFeedbackPercentage = () => {
      const total = countTotalFeedback();
      return total ? Math.round((good / total) * 100) : 0;
      };
      const options = Object.keys({good, bad, neutral});
      return (
        <div>
          <Section title="Please leave feedback">
            <FeedbackOptions options={options} onLeaveFeedback={handleAddFeedback} />
            {countTotalFeedback() > 0 ? (
              <Statistic
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback}
                positivePercentage={countPositiveFeedbackPercentage}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </div>
      );
}
