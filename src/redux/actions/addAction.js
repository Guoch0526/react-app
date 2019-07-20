import {createAction} from 'redux-actions'
import * as types from '../actionTypes/addActionTypes'

export const addItem = createAction(types.ADD_ITEM)
export const reduceItem = createAction(types.REDUCE_ITEM)