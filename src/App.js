import React, {useState, useEffect} from "react";
import PhotoCard from './Components/PhotoCard'
import axios from "axios"
import "./App.scss";
// import NasaCarousel from "./Components/NasaCarousel";


const App = props => {
  const [data, setData] =useState([]);
  

  console.log('PhotoCard.js -> %cwhere?:', 'color: green', 'Top')

  useEffect(() => {

  axios
.get("https://api.nasa.gov/planetary/apod?api_key=1zQ2xsEyCfUJ88Kbjge2fA9L4rvxpJW7eBnKnd1P&count=6")

 .then (res => {
console.log('App.js -> %cres:', 'color: MediumBlue', res)

 setData(res.data)
console.log('App.js -> %csetData:', 'color: navy', setData)

 })
.catch(err => {
console.error('App.js -> %c Problem getting data - check this: ', 'color: Fuchsia', err )

  
})


 }, [data])




//  console.log('App.js -> %cdata:', 'color: DarkMagenta', data)

  return (

    <div className="App">{
      data.map(data => 
        <div>
          <PhotoCard key={data.index} title={data.title} />
        </div>
      )}
  
    </div>
     
  )}


export default App
