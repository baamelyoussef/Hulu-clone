import Head from 'next/head'
import Nav from '../Components/Nav'
import Header from '../Components/Header'
import Results from '../Components/Results'
import requests from '../utils/requests'

export default function Home({ results }) {
  
  return (
    <div>
      <head>
        <title>Hulu Clone -YB</title>
        <link rel="icon" href="/favicon.ico"/>  
      </head>
      {/* HEADER */ }
      <Header>
      </Header>
      {/* NAV */}
      <Nav>
      </Nav>
      {/* RESULTS */}
      <Results results={results}/>
    </div>
  )
}/*
*/

export async function getServerSideProps(context) {   
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`)
  .then((res) => res.json()); 
  
  return {     
    props: {       
      results: request.results
  },   
}; 
}

