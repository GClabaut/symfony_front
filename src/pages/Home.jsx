import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader'

const Home = () => {

  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);
  useEffect(() => {
    if (isLoading) {
      fetch('http://localhost:8000/api/tasks')
      .then((res) => res.json())
      .then((data) => {
        setTasks(data['hydra:member']);
        setIsLoading(!isLoading);
      });
    }
  }, [isLoading]);

  console.log(tasks)

  return !isLoading ? (
    tasks?.map((task) => {
      return (
      <div key={task?.id}>
        <h2>{task?.titre}</h2>
      </div>
      );
    })
    ) : <div><Loader /></div>;
  }

export default Home;