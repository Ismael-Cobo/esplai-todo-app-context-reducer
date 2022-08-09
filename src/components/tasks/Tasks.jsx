import { useContext } from 'react'
import { Row } from 'react-bootstrap'
import { TaskContext } from '../../context'
import { Title, Task } from './components'

export const Tasks = () => {

  const { taskState } = useContext(TaskContext)

  // console.log(taskState)

  return (
    <Row>
      <Title title='Tasques' />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {
          taskState.tasks.map(({ id, task }) => (
            <Task key={id} title={task} id={id} />
          ))
        }

      </div>
    </Row>
  )
}
