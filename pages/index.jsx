import MasterLayout from "../components/master.layout"
import Head from 'next/head'
import { useEffect, useState } from "react"
export default function index() {


  useEffect(() => {
    async function getData() {
      const response = await fetch("https://rickandmortyapi.com/api/character?page=1")
      const data = await response.json()
      setCharacters(data.results)
    }
    getData()
  },[])

  const [characters,setCharacters] = useState([])

  return (
    <MasterLayout>
      <Head>
        <title> Start | Home  </title>
      </Head>
      <section className="characters-section">
        <div className="container">
          <div className="row">
            {characters.map(x =>  <Character character={x}  />   )}
          </div>
        </div>
      </section>

    </MasterLayout>
  )
}

function Character ({character}){
  return (
    <div className="box">
      <div className="img-wrap">
      <img src={character.image} alt="" />
      </div>
      <div className="body">
        <div className="top">
          <h3 className="name">{character.name}</h3>
          <p className="gender"> {character.gender} </p>
        </div>
      </div>

    </div>
  )
}


// export async function getStaticProps(){
//   const response = await fetch("https://rickandmortyapi.com/api/character?page=1")
//   const data = await response.json()
//   return  {
//     props : {
//       data : data ,
//     }
//   }
// }