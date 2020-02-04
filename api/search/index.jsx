import React, { Component } from 'react'
import {
  SEARCH
} from '../urls/search'
const axios = require('axios')

export const searchAPI = (name) => {
    const res = axios.post(
      SEARCH,
      { name },
      {
        headers: {
          'Access-Control-Allow-Methods': 'POST'
        }
      }
    )
    return res
  }