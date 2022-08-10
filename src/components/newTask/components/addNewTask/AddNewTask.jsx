import { useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import { v4 } from 'uuid'

import { TaskContext } from '../../../../context'
import { useForm } from '../../../../hooks/useForm'
import { types } from '../../../../types/types'

const formData = {
  'task': ''
}

export const AddNewTask = () => {

  const { task, onInputChange, reset } = useForm(formData)
  const { dispatch, taskState } = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(taskState)
    if (task.length <= 0) return

    const data = { id: v4(), task }
    const action = { type: types.addNew, payload: data }

    // let newTasks = [...taskState.tasks, data]

    // localStorage.setItem('tasks', JSON.stringify(newTasks));

    dispatch(action);

    reset()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="task">
        <Form.Label as='h3'>Tasca</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nova tasca"
          value={task}
          onChange={onInputChange}
          name='task'
        />
      </Form.Group>

      <Button type='submit' variant='primary'>Enviar</Button>
    </Form>
  )
}
