import React, {useState, useEffect} from "react";
import PhotoCard from './Components/PhotoCard'
import axios from "axios"
import "./App.scss";
// import NasaCarousel from "./Components/NasaCarousel";


function App(props) {
  const [data, setData] =useState({ });
  

  console.log('PhotoCard.js -> %cwhere?:', 'color: green', 'Top')

  useEffect(() => {

  axios
.get("https://api.nasa.gov/planetary/apod?api_key=1zQ2xsEyCfUJ88Kbjge2fA9L4rvxpJW7eBnKnd1P")

 .then (res => {
 console.log('App.js -> %cres:', 'color: MediumBlue', res)

 setData(res.data)
//  console.log('PhotoCard.js -> %cRes Data:', 'color: coral', res.data)
 })
.catch(error => {
console.error('App.js -> %c Problem getting data - check this: ', 'color: Fuchsia', error)

  
})

 

 }, [])
 console.log('App.js -> %cdata:', 'color: DarkMagenta', data)

  return (

    <div className="App">
        {/* <NasaCarousel /> */}
      
      <PhotoCard  title={data.title}
                  date={data.date}
                  url={data.url}
                  explanation = {data.explanation}
                 
     />

   
    </div>
  );
}

export default App;
