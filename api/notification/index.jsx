import React, { Component } from 'react'
import {
  NOTIFICATION
} from '../urls/notification'
const axios = require('axios')

export const notifAPI = (token) => {
    const res = axios.post(
      NOTIFICATION,
      { token },
      {
        headers: {
          'Access-Control-Allow-Methods': 'POST'
        }
      }
    )
    return res
}
