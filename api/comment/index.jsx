import React, { Component } from 'react'
import { GET_COMMENTS, ADD_COMMENTS } from '../urls/comment'
const axios = require('axios')

export const getCommentsAPI = (token, pid) => {
  const res = axios.post(
    GET_COMMENTS,
    { token, pid },
    {
      headers: {
        'Access-Control-Allow-Methods': 'POST'
      }
    }
  )
  return res
}

export const addCommentsAPI = (token, pid, content) => {
  const res = axios.post(
    ADD_COMMENTS,
    { token, pid, content },
    {
      headers: {
        'Access-Control-Allow-Methods': 'POST'
      }
    }
  )
  return res
}
