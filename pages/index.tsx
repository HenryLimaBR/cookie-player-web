import React from 'react'
import Head from 'next/head'

import style from '../styles/index.module.css'

import init from '../services/init'

class Home extends React.Component  {

  componentDidMount() {
    window.addEventListener('load', init)
  }

  render() {
  	return (
  		<>
	  		<Head>
	  			<title>Cookie Player</title>
		  	</Head>

  			<div className={style.container}>
	  			
	  		</div>
	  	</>
  	)
  }
}

export default Home