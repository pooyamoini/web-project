import base_add from '.'

export const CREATE_POST_ADDRESS = `${base_add}/post/create`

export const GET_POST = pid => `${base_add}/post/get/${pid}/`

export const LIKE = `${base_add}/post/like/`

export const GET_HOME_PAGE = `${base_add}/post/homepage/`

export const GET_HOMEPAGE_NEWS = `${base_add}/post/homepage/news/`

export const GET_HOMEPAGE_HOTS = `${base_add}/post/homepage/hots/`

export const GET_HOMEPAGE_INTEREST = `${base_add}/post/homepage/interest/`

export const EDIT_POST = `${base_add}/post/editpost/`

export const DELETE_POST = `${base_add}/post/delete/`
