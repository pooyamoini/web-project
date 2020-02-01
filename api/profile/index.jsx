import React, { Component } from 'react'
import { GET_PROFILE, GET_SUGGESTIONS, FOLLOW } from '../urls/profile'
const axios = require('axios')

export const getProfileAPI = (username, token) => {
  const res = axios.post(
    GET_PROFILE(username),
    { token },
    {
      headers: {
        'Access-Control-Allow-Methods': 'POST'
      }
    }
  )
  return res
}

export const getSuggestionsAPI = token => {
  const res = axios.post(
    GET_SUGGESTIONS,
    { token },
    {
      headers: {
        'Access-Control-Allow-Methods': 'POST'
      }
    }
  )
  return res
}

export const followAPI = (token, username) => {
  const res = axios.post(
    FOLLOW,
    { token, username },
    {
      headers: {
        'Access-Control-Allow-Methods': 'POST'
      }
    }
  )
  return res
}
