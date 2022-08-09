import { types } from "../types/types";

export const taskReducer = ( state = {}, action ) => {

  switch(action.type) {
    case types.addNew:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }

    case types.deleteTask:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id!==action.payload)
      }

    default:
      return state

  }
}