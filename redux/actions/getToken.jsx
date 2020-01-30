import React from 'react'

export function setToken (token) {
  return {
    type: 'SET_TOKEN',
    token
  }
}
