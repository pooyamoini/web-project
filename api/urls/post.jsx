import base_add from '.'

export const CREATE_POST_ADDRESS = `${base_add}/post/create`

export const GET_POST = pid => `${base_add}/post/get/${pid}/`

export const LIKE = `${base_add}/post/like/`
