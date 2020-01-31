import React, { Component } from 'react'
import { GET_PROFILE } from '../urls/profile'
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
