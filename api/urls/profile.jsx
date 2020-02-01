import base_add from '.'

export const GET_PROFILE = username => `${base_add}/profile/get/${username}/`

export const GET_SUGGESTIONS = `${base_add}/account/suggestions`

export const FOLLOW = `${base_add}/profile/follow/`

export const GET_FF = `${base_add}/profile/get_ff/`
