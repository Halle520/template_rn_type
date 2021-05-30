const INITTIAL_STATE = {
  token: null,
  currentUser: null,
  user: {},
}

export const authReducer = (state = INITTIAL_STATE, action) => {
  switch (action.type) {
    case 'submit':
      return {...state, user: action.data}
    default:
      return state
  }
}
