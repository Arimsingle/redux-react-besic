import React, { useState, useEffect } from 'react'
import { firestore } from './index'
const App = () => {
  useEffect(() => {
    Data_firebase()
  })
  const [tasks, setTasks] = useState([
  ]);
  const [name, setName] = useState('');
  const Data_firebase = () => {
    firestore.collection('task').onSnapshot((snapshot) => {
      let tasksfirebase = snapshot.docs.map(data => {
        const { id, name } = data.data()
        return { id, name }
      })
      setTasks(tasksfirebase)
    })
  }
  const deleteTask = (id) => {
    firestore.collection('task').doc(id + '').delete()
  }
  const updateTask = (id) => {
    firestore.collection('task').doc(id + '').set({ id, name })
  }
  const renderTask = () => {
    if (tasks && tasks.length) {
      return tasks.map((text, index) => {
        return (
          <ul key={index}>
            <li>{text.id}:{text.name}</li>
            <button onClick={() => deleteTask(text.id)}>delete</button>
            <button onClick={() => updateTask(text.id)}>update</button>
          </ul>
        )
      })
    }
    else {
      return <li>No task</li>
    }
  }
  const addTask = () => {
    let id = tasks.length !== 0 ? tasks[tasks.length - 1].id + 1 : 1
    firestore.collection('task').doc(id.toString()).set({ id, name })
  }
  return (
    <div>
      <div>
        <input onChange={(e) => setName(e.target.value)} />
        <div>
          <button onClick={addTask}>Submit</button>
        </div>
      </div>
      {
        renderTask()
      }
    </div>
  )
}
export default App;