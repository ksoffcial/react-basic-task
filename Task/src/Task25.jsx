import React, { useEffect } from 'react'
import { useState } from 'react'

const Task25 = () => {

  const [uiData, setUiData] = useState([])


  useEffect(() => {
    let apidata = async () => {
      let data = await fetch("https://jsonplaceholder.typicode.com/posts/")
      let jsonData = await data.json();
      // console.log(jsonData[0])
      console.log(jsonData[0].title)
      console.log(jsonData[0].id)
      console.log(jsonData[0].body)
      setUiData(jsonData)
    }
    apidata();
  }, []);


  console.log(uiData)
  return (
    <div>
      <h1> Task 25 getting data from the api</h1>
      <div className='card'>
        {
          uiData.map((info, idx) => {
            if (idx < 5) {
              return (
                <div key={info.id} className='child'>
                  <h1>{info.id}</h1>
                  <h3 className='heading'>{info.title}</h3>
                  <p>{info.body}</p>
                </div>)
            }
          })
        }
      </div>
    </div>
  )
}

export default Task25