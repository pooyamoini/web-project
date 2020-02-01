import base_add from '.'

export const GET_PROFILE = username => `${base_add}/profile/${username}/`

export const GET_SUGGESTIONS = `${base_add}/account/suggestions`
