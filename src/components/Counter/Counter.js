import React, { useState, useEffect } from 'react';
import FeedbackOptions from './FeedbackOptions';
import './Counter.css';
import Statistics from './Statistics';
import Notification from './Notification';
import Section from './Section';

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
        <div className='counter'>
        <Section title={'Please leave feedback'}>
            <FeedbackOptions
              clickGood={handleGood}
              clickNeutral={handleNeutral}
              clickBad={handleBad}
            />
          </Section>
          <p className='title'>Statistics</p>
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
             : <Notification message="There is no feedback" />  
          }
          {/* <Section title={'Please leave feedback'}>
            <FeedbackOptions
              // clickGood={handleGood}
              // clickNeutral={handleNeutral}
              // clickBad={handleBad}
            />
          </Section>
          <p className='title'>Statistics</p>

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
             : <Notification message="There is no feedback" />  
          } */}

        </div>
      </div>
    )

}


// class Counter extends Component {
//   static defaultProps = {
//     initialValue: 0
//   }

//   state = {
//     goodValue: this.props.initialValue,
//     neutralValue: this.props.initialValue,
//     badValue: this.props.initialValue,
//     totalValue: this.props.initialValue,
//     percentageValue: this.props.initialValue,
//   }
  

//   countTotalFeedback = () => {
//     this.setState(prevState => {
//       return ({totalValue: this.state.totalValue + 1})
//     }, () => this.countPositiveFeedbackPercentage())
//   }

//   countPositiveFeedbackPercentage = () => {
//     this.setState(prevState => {
//       return ({percentageValue: prevState.percentageValue = Math.round((prevState.goodValue / prevState.totalValue) * 100)})
//     })
//   }
//   handleGood = () => {
//     this.countTotalFeedback()
//     this.setState(prevState => {
//       return ({goodValue: this.state.goodValue + 1})
//     })
//   }

//   handleNeutral = () => {
//     this.countTotalFeedback()
//     this.setState({
//       neutralValue: this.state.neutralValue + 1,
//     })
//   }

//   handleBad = () => {
//     this.countTotalFeedback()
//     this.setState({
//       badValue: this.state.badValue + 1,
//     })
//   }

//   render() {
//     const { badValue, goodValue, neutralValue, totalValue, percentageValue } = this.state
//     return (
//       <div>
//         <div className='counter'>
//           <Section title={'Please leave feedback'}>
//             <FeedbackOptions
//               clickGood={this.handleGood}
//               clickNeutral={this.handleNeutral}
//               clickBad={this.handleBad}
//             />
//           </Section>
//           <p className='title'>Statistics</p>
//           {totalValue > 0 ? 
//             <Section>
//               <Statistics 
//                 good={goodValue}
//                 neutral={neutralValue}
//                 bad={badValue}
//                 total={totalValue}
//                 positivePercentage={percentageValue}
//               />
//             </Section>
//              : <Notification message="There is no feedback" />  
//           }

//         </div>
//       </div>
//     )
//   }
// }

// export default Counter;
