import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const AnecdoteList = ({ anecdotes }) => (
  <>
    <h2>Anecdotes</h2>
    <ul>
      {anecdotes.map((anecdote) => (
        <li key={anecdote.id}>
          <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
        </li>
      ))}
    </ul>
  </>
)

AnecdoteList.propTypes = {
  anecdotes: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default AnecdoteList