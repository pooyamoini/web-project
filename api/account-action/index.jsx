import React, { Component } from "react";
import Router from "next/router";
import {
  SIGNUP_ROUTE,
  LOGIN_ROUTE,
  VALIATE_TOKEN,
  EDIT_PROFILE,
  FORGET_PASSWORD
} from "../urls/account";
const axios = require("axios");

export const signupAPI = params => {
  const res = axios.post(SIGNUP_ROUTE, params, {
    headers: {
      "Access-Control-Allow-Methods": "POST"
    }
  });
  return res;
};

export const loginAPI = params => {
  const res = axios.post(LOGIN_ROUTE, params, {
    headers: {
      "Access-Control-Allow-Methods": "POST"
    }
  });
  return res;
};

export const tokenIsValid = token => {
  const res = axios.post(
    VALIATE_TOKEN,
    { token },
    {
      headers: {
        "Access-Control-Allow-Methods": "POST"
      }
    }
  );
  return res;
};

export const logout = () => {
  localStorage.setItem("token", null);
  Router.push("/");
};

export const editProfileAPI = params => {
  const res = axios.put(EDIT_PROFILE, params, {
    headers: {
      "Access-Control-Allow-Methods": "POST"
    }
  });
  return res;
};

export const forgetPasswordAPI = email => {
  const res = axios.post(
    FORGET_PASSWORD,
    { email },
    {
      headers: {
        "Access-Control-Allow-Methods": "POST"
      }
    }
  );
  return res;
};
