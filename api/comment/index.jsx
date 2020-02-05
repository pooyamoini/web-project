import React, { Component } from 'react'
import {
  GET_COMMENTS,
  ADD_COMMENTS,
  ADD_REPLY,
  DELETE_MAIN_COMMENT,
  EDIT_MAIN_COMMENT
} from '../urls/comment'
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

export const replyCommentAPI = (token, pid, cid, content) => {
  const res = axios.post(
    ADD_REPLY,
    { token, pid, cid, content },
    {
      headers: {
        'Access-Control-Allow-Methods': 'POST'
      }
    }
  )
  return res
}

export const deleteMainCommentAPI = cid => {
  const res = axios.post(
    DELETE_MAIN_COMMENT,
    { cid },
    {
      headers: {
        'Access-Control-Allow-Methods': 'POST'
      }
    }
  )
  return res
}

export const editMainCommentAPI = (cid, content) => {
  const res = axios.post(
    EDIT_MAIN_COMMENT,
    { cid, content },
    {
      headers: {
        'Access-Control-Allow-Methods': 'POST'
      }
    }
  )
  return res
}
