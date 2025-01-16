/* eslint-disable react/prop-types */
import { useState } from 'react'
import Button from './components/button'

// StatisticsLine component
const StatisticsLine = ({ text, value }) => { return <tr><td>{text}</td> <td>{value}</td></tr> }

// statistics component
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total
  const positivePercentage = total === 0 ? 0 : (good / total) * 100

  return (
    <table>
        <tbody>
            <StatisticsLine text="good" value={good} />
            <StatisticsLine text="neutral" value={neutral} />
            <StatisticsLine text="bad" value={bad} />
            <tr><td>all</td> <td>{total}</td></tr>
            <tr><td>average</td> <td>{average}</td></tr>
            <tr><td>positive</td> <td>{positivePercentage} %</td></tr>
        </tbody>
    </table>
  )
}

const App = () => {
  // random anecdotes
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  // random anecdote
  const [selected, setSelected] = useState(0)

  function randomAnecdote() {
    setSelected(Math.floor(Math.random() * anecdotes.length))
    // Expected output: 0 to 7
  }

  // votes
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  // add vote
  function addVote() {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }
  // anecedote with most votes
  function getMostVotedAnecdote() {
    const maxVotes = Math.max(...votes)
    const maxIndex = votes.indexOf(maxVotes)
    return anecdotes[maxIndex]
  }

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function incrementGood() {
    setGood(good + 1)
  }
  function incrementNeutral() {
    setNeutral(neutral + 1)
  }
  function incrementBad() {
    setBad(bad + 1)
  }

  return (
    <>
      <h1>Give feedback</h1>
      <Button text="good" handleClick={incrementGood}/>
      <Button text="neutral" handleClick={incrementNeutral} />
      <Button text="bad" handleClick={incrementBad} />
      <h1>Statistics</h1>
      { good === 0 && neutral === 0 && bad === 0 ? <p>No feedback given</p> : <Statistics good={good} neutral={neutral} bad={bad} /> }
      <div>{anecdotes[selected]}</div>
      <Button text="vote" handleClick={addVote} />
      <Button text="next anecdote" handleClick={randomAnecdote} />
      <h1>Anecdote with most votes</h1>
      <p>{getMostVotedAnecdote()}</p>
      <p>has {Math.max(...votes)} votes</p>
    </>
  )
}

export default App