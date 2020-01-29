import React from 'react'
import { createStore } from 'redux'
import { setToken } from '../reducers/setToken'
import initialState from '.'

function makeStore () {
  return createStore(setToken, initialState)
}

export default makeStore
