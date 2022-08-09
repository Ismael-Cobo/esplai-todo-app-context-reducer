import { useContext } from "react"
import { Alert } from "react-bootstrap"
import { TaskContext } from "../../../../context"
import { types } from "../../../../types/types"
import { Cross } from "../cross"

export const Task = ({ title, id }) => {

  const { dispatch } = useContext(TaskContext)

  const handleClick = (id) => {
    // console.log(taskState)

    const action = { type: types.deleteTask, payload: id }

    dispatch(action);
  }

  return (
    <Alert
      variant="primary"
      style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >{title} <Cross fn={() => handleClick(id)} /></Alert>
  )
}
