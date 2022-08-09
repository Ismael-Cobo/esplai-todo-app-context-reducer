import { useReducer } from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import { NewTask, Tasks } from './components'
import { taskReducer, TaskContext } from './context';

const init = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  return {
    tasks
  }
}


function App() {

  const [taskState, dispatch] = useReducer(taskReducer, {}, init)

  // console.log(taskState)
  return (
    <TaskContext.Provider value={{ taskState, dispatch }}>

      <Container>

        <Row style={{ margin: 0, marginTop: '1rem', justifyContent: 'center' }}>
          <Col>
            <NewTask />
          </Col>
          <Col>
            <Tasks />
          </Col>
        </Row>
      </Container>
    </TaskContext.Provider>
  )
}

export default App