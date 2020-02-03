import React, { Component } from 'react'
import {
  CREATE_POST_ADDRESS,
  GET_POST,
  LIKE,
  GET_HOME_PAGE,
  GET_HOMEPAGE_NEWS,
  GET_HOMEPAGE_HOTS,
  EDIT_POST,
  DELETE_POST
} from '../urls/post'
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

export const getHomePageAPI = token => {
  const res = axios.post(
    GET_HOME_PAGE,
    { token },
    {
      headers: {
        'Access-Control-Allow-Methods': 'POST'
      }
    }
  )
  return res
}

export const getHomePageNewsAPI = token => {
  const res = axios.post(
    GET_HOMEPAGE_NEWS,
    { token },
    {
      headers: {
        'Access-Control-Allow-Methods': 'POST'
      }
    }
  )
  return res
}

export const getHomePageHotsAPI = token => {
  const res = axios.post(
    GET_HOMEPAGE_HOTS,
    { token },
    {
      headers: {
        'Access-Control-Allow-Methods': 'POST'
      }
    }
  )
  return res
}

export const editPostAPI = (token, pid, content) => {
  const res = axios.post(
    EDIT_POST,
    { token, pid, content },
    {
      headers: {
        'Access-Control-Allow-Methods': 'POST'
      }
    }
  )
  return res
}

export const deletePostAPI = (token, pid) => {
  const res = axios.post(
    DELETE_POST,
    { token, pid },
    {
      headers: {
        'Access-Control-Allow-Methods': 'POST'
      }
    }
  )
  return res
}
