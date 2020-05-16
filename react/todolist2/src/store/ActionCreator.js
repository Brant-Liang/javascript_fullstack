import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './ActionTypes'

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})
export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
})

export const getDeleteAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})