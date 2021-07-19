import { ADD_POACHER } from '../actions/poacher'

const intialState = []

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_POACHER:
        return [...state, action.newPoacher]
      default:
      return state
  }
}

export default reducer
