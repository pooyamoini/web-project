import React, { Component } from 'react'
import { SIGNUP_ROUTE, LOGIN_ROUTE } from '../urls/account'
const axios = require('axios')

export const signupAPI = params => {
  const res = axios.post(SIGNUP_ROUTE, params, {
    headers: {
      'Access-Control-Allow-Methods': 'POST'
    }
  })
  return res
}

export const loginAPI = params => {
  const res = axios.post(LOGIN_ROUTE, params, {
    headers: {
      'Access-Control-Allow-Methods': 'POST'
    }
  })
  return res
}
