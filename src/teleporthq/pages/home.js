import React from 'react'

import { Helmet } from 'react-helmet'

import CreateUser from '../components/create-user'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Humble Our Okapi</title>
        <meta property="og:title" content="Humble Our Okapi" />
      </Helmet>
      <CreateUser rootClassName="create-user-root-class-name"></CreateUser>
    </div>
  )
}

export default Home
