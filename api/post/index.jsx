import React, { Component } from 'react'
import Router from 'next/router'
import { CREATE_POST_ADDRESS, GET_POST, LIKE } from '../urls/post'
const axios = require('axios')

export const createPostAPI = params => {
  const res = axios.post(CREATE_POST_ADDRESS, params, {
    headers: {
      'Access-Control-Allow-Methods': 'POST'
    }
  })
  return res
}

export const getPostAPI = (token, pid) => {
  const res = axios.post(
    GET_POST(pid),
    { token, pid },
    {
      headers: {
        'Access-Control-Allow-Methods': 'POST'
      }
    }
  )
  return res
}

export const likeAPI = (token, post_id, type) => {
  const res = axios.post(
    LIKE,
    { token, post_id, type },
    {
      headers: {
        'Access-Control-Allow-Methods': 'POST'
      }
    }
  )
  return res
}
