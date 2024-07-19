import React, { useEffect } from 'react'

const Home = () => {

  useEffect(() => {
    fetch('http://localhost:8000/api/tasks')
    .then((res) => res.json())
    .then((data) => {return data['hydra:member']})
  }, [tasks])

  return (
    <div>
      <span>

      </span>
    </div>
  )
}

export default Home;