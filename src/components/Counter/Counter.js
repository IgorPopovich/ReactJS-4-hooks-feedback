import React, { useState, useEffect } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import css from './Counter.module.css';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
import Section from '../Section/Section';
import PropTypes from 'prop-types';

export const Counter = () => {
  const [goodValue, setGoodValue] = useState(0)
  const [neutralValue, setNeutralValue] = useState(0)
  const [badValue, setBadValue] = useState(0)
  const [totalValue, setTotalValue] = useState(0)
  const [percentageValue, setPercentageValue] = useState(0)

  const countTotalFeedback = () => {
     setTotalValue(totalValue + 1)
  }

  const handleGood = () => {
     setGoodValue(goodValue + 1)
     countTotalFeedback()
  }

  const handleNeutral = () => {
    setNeutralValue(neutralValue + 1)
    countTotalFeedback()
  }

  const handleBad = () => {
    setBadValue(badValue + 1)
    countTotalFeedback()
  }

  useEffect(() => {
    setPercentageValue(Math.round((goodValue / totalValue) * 100))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ totalValue ])


    return (
      <div>
        <div className={css.counter}>
        <Section title={'Please leave feedback'}>
            <FeedbackOptions
              clickGood={handleGood}
              clickNeutral={handleNeutral}
              clickBad={handleBad}
            />
          </Section>
          <p className={css.title}>Statistics</p>
          {totalValue > 0 ? 
            <Section>
              <Statistics 
                good={goodValue}
                neutral={neutralValue}
                bad={badValue}
                total={totalValue}
                positivePercentage={percentageValue}
              />
            </Section>
             : <Notification message={"There is no feedback"} />  
          }
        </div>
      </div>
    )

}

Counter.propTypes = {
  goodValue: PropTypes.number,
  neutralValue: PropTypes.number,
  badValue: PropTypes.number,
  totalValue: PropTypes.number,
  percentageValue: PropTypes.number,
}; 

