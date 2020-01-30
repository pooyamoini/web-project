import React from 'react'

export function setToken (initialState, action) {
  if (action.type === 'SET_TOKEN') {
      return({token: action.token})
  }
}
