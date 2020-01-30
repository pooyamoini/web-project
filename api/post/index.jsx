import React, { Component } from 'react'
import Router from 'next/router'
import { CREATE_POST_ADDRESS } from '../urls/post'
const axios = require('axios')

export const createPostAPI = params => {
  const res = axios.post(CREATE_POST_ADDRESS, params, {
    headers: {
      'Access-Control-Allow-Methods': 'POST'
    }
  })
  return res
}
