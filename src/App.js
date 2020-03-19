import React, { useState, useEffect } from 'react'
import { firestore } from './index'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import './App.css';
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
          <div key={index}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="data:image/png;base64,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" />
              <Card.Body>
                <Card.Title>REACT_FIREBASE</Card.Title>
                <Card.Text>
                  <div>
                    ID:{text.id}
                  </div>
                  <div>
                    NAME:{text.name}
                  </div>
                </Card.Text>
                <div className="d-flex justify-content-around" >
                  <Button variant="primary" onClick={() => deleteTask(text.id)}>delete</Button>
                  <Button variant="primary" onClick={() => updateTask(text.id)}>update</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
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
      <div className="row">
        {
          renderTask()
        }
      </div>

    </div>
  )
}
export default App;

{/* <ul key={index}>
<li>{text.id}:{text.name}</li>
<Button variant="primary" onClick={() => deleteTask(text.id)}>delete</Button>
<Button variant="primary" onClick={() => updateTask(text.id)}>update</Button>
</ul> */}