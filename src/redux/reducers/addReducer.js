import {handleActions} from 'redux-actions'
import * as types from '../actionTypes/addActionTypes'

let itemState = {
  num: 0,
}

function addItem(state, action) {
  return {
    ...state,
    num: state.num + 1,
  }
}

const addReducer = handleActions({
  [types.ADD_ITEM]: addItem,
}, itemState)

export default addReducer
