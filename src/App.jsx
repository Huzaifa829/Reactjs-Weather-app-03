import { useEffect, useRef, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'

function App() {
  const [weathedt_show, setWeathedt_show] = useState('')
  const [weathedt_array, setWeathedt_array] = useState([])

  const inputdt = useRef()
  


  const submitbtn = async()=>{
    const inputValue = inputdt.current.value
    console.log(inputValue);
    setWeathedt_show(inputValue)
    if (inputValue !== '') {
    
      async function weathedt_get(){
        try {
          const WeatherDt = await axios(`https://api.weatherapi.com/v1/current.json?key=7ae08629aaf54a1cacd151204242006&q=${inputValue}&aqi=no`)
          // console.log(`weathedt==>`,WeatherDt.data);
          // console.log(WeatherDt.data);
          // console.log(WeatherDt.data.location);
          const check = {
            temp_c: WeatherDt.data.current.temp_c,
            temp_f: WeatherDt.data.current.temp_f,
  
          }
          
          weathedt_array.push({
            ...WeatherDt.data.location,
            ...WeatherDt.data.current.condition,
            ...check
          })
          setWeathedt_array([...weathedt_array,])
          inputdt.current.value = ''
        } catch (error) {
          console.log(error);
          
        }
      }
      weathedt_get()
    }
    
  }


  return (
    <>
    <div className="flex flex-col items-center">
      <h1>Weather app</h1>
    <input ref={inputdt} type="text" placeholder="Enter text" className="input input-bordered w-full max-w-xs" />
    <button onClick={submitbtn} className="btn btn-primary">
      Submit
    </button>
    </div>
    <div className='flex flex-wrap gap-[30px]'>
    {weathedt_array.length > 0 ? (
          weathedt_array.map((item, index) => (
          
            <WeatherCard key={index} weatherData={item} />
          ))
        ) : (
          <p>Loading...</p>
        )}
    {/* <WeatherCard/>
    <WeatherCard/>
    <WeatherCard/>
    <WeatherCard/>
    <WeatherCard/> */}
    </div>
  </>
  )
}

export default App
