import React, { useState } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Menu from './components/MenuList'
import AnecdoteList from './components/AnecdoteList'
import About from './components/AboutPage'
import Footer from './components/FooterPage'
import CreateNew from './components/CreateNewAnecdote'
import Anecdote from './components/Anecdotes'
import Notification from './components/Notify'

const App = () => {
  const [notification, setNotification] = useState(null)
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  const addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    setAnecdotes(anecdotes.concat(anecdote))
    setNotification(`${anecdote.content} created successfully !`)
    setTimeout(() => {
      setNotification(null)
    }, 10000)
  }

  const match = useRouteMatch('/anecdotes/:id')
  const anecdote = match
    ? anecdotes.find((anecdote) => anecdote.id === Number(match.params.id))
    : null

  return (
    <>
      <Menu />
      <Switch>
        <Route path="/anecdotes/:id">
          <Anecdote anecdote={anecdote} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/create_new">
          <CreateNew addNew={addNew} />
        </Route>
        <Route path="/">
          <Notification notification={notification} />
          <AnecdoteList anecdotes={anecdotes} />
        </Route>
      </Switch>
      <Footer />
    </>
  )
}


export default App