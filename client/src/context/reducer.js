import {
  DISPLAY_ALERT,
  CLEAR_ALERT,

  DISPLAY_ALERT_DUPLICATE_EMAIL,
  DISPLAY_ALERT_EMAIL,
  DISPLAY_ALERT_BLANK,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_PLAYER_BEGIN,
  CREATE_PLAYER_SUCCESS,
  CREATE_PLAYER_ERROR,
  GET_PLAYERS_BEGIN,
  GET_PLAYERS_SUCCESS,
  GET_BLOGS_BEGIN,
  GET_BLOGS_SUCCESS,
  GET_BLOG_BEGIN,
  GET_BLOG_SUCCESS,

  SET_EDIT_PLAYER,
  DELETE_PLAYER_BEGIN,
  EDIT_PLAYER_BEGIN,
  EDIT_PLAYER_SUCCESS,
  EDIT_PLAYER_ERROR,
  RESET_EDIT_PLAYER,
  SHOW_STATS_BEGIN,
  SHOW_STATS_SUCCESS,
  CLEAR_FILTERS,
  /*  ------------TEAMTRAINING------------ */
  CREATE_COMMENT_BEGIN,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_ERROR,
  GET_COMMENTS_BEGIN,
  GET_COMMENTS_SUCCESS,
  SET_EDIT_COMMENT,
/*   DELETE_COMMENT_BEGIN, */
  EDIT_COMMENT_BEGIN,
  EDIT_COMMENT_SUCCESS,
  EDIT_COMMENT_ERROR,
  RESET_EDIT_COMMENT,






} from './actions'

import { useAppContext } from "./appContext.js"


import { initialState } from './appContext'

const reducer =   (state, action) => {
  if (action.type === DISPLAY_ALERT) {
 console.log("erbnrmthnrgdbfsvdascvbdgnfh");
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: "Please provide all values",
    }
  }
  if (action.type === DISPLAY_ALERT_EMAIL) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: "Please provide valid email",
    }
  }
  if (action.type === DISPLAY_ALERT_BLANK) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: "Existem campos em branco",
    }
  }
  if (action.type === DISPLAY_ALERT_DUPLICATE_EMAIL) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: "Inserted email already exists",
    }
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    }
  }
  if (action.type === HANDLE_CHANGE) {
    console.log(action.payload.value);

    return {
      ...state,

      [action.payload.name]: action.payload.value,
    }
  }
  if (action.type === CLEAR_VALUES) {
    const initialState = {
      name: "",
      email: "",
      mobile: "",
      password: "",
      developer: false,
      pmanager: false,
      architect: false,
    }

    return {
      ...state,
      ...initialState,
    }
  }
  if (action.type === CREATE_PLAYER_BEGIN) {
    return { ...state, isLoading: true }
  }
  if (action.type === CREATE_PLAYER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'New PLAYER Created!',
    }
  }
  if (action.type === CREATE_PLAYER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }
  if (action.type === GET_PLAYERS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false }
  }
  if (action.type === GET_PLAYERS_SUCCESS) {
    return {
      ...state,

      players: action.payload.players,

    }
  }
  if (action.type === GET_BLOGS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false }
  }
  if (action.type === GET_BLOGS_SUCCESS) {
    return {
      ...state,

      blogs: action.payload.blogs,

    }
  }

  if (action.type === GET_BLOG_BEGIN) {
    return { ...state, isLoading: true, showAlert: false }
  }
  if  (action.type === GET_BLOG_SUCCESS) {
    console.log(action.payload.blogs2);
    console.log(action.payload.postId);
    return {
      ...state,

   
      blogTitle: action.payload.blogs2.title,
      blogDate: action.payload.blogs2.publish_date,
      blogAuthor: action.payload.blogs2.author,
      blogDescription: action.payload.blogs2.description,
      fetching:true
    }
  
  }




  if (action.type === SET_EDIT_PLAYER) {
    const PLAYER = state.PLAYERs.find((PLAYER) => PLAYER._id === action.payload.id)
    const { _id, name, email, password, mobile, architect, developer, pmanager } = PLAYER
    return {
      ...state,
      isEditing: true,
      editPLAYERId: _id,
      name,
      email,
      password,
      mobile,
      architect,
      developer,

      pmanager,
    }
  }
  if (action.type === SET_EDIT_PLAYER) {
    const PLAYER = state.PLAYERs.find((PLAYER) => PLAYER._id === action.payload.id)
    const { _id, name, email, password, mobile, architect, developer, pmanager } = PLAYER
    return {
      ...state,
      isEditing: true,
      editPLAYERId: _id,
      name,
      email,
      password,
      mobile,
      architect,
      developer,

      pmanager,
    }
  } 
 /*  if (action.type === SET_BLOG_PLAYER) {
    const Blog = state.blogs.find((Blog) => PLAYER._id === action.payload.id)
    const { _id, name, email, password, mobile, architect, developer, pmanager } = PLAYER
    return {
      ...state,
      isEditing: true,
      editPLAYERId: _id,
      name,
      email,
      password,
      mobile,
      architect,
      developer,

      pmanager,
    }
  } */
  if (action.type === DELETE_PLAYER_BEGIN) {
    return { ...state, isLoading: true }
  }
  if (action.type === EDIT_PLAYER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }
  if (action.type === RESET_EDIT_PLAYER) {
    return {
      ...state,
      name: "",
      email: "",
      password: "",
      mobile: "",
      pmanager: false,
      developer: false,
      architect: false,
      isEditing: false,
      editPLAYERId: "",
    }
  }
  if (action.type === EDIT_PLAYER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'PLAYER Updated!',
    }
  }
  if (action.type === EDIT_PLAYER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }
  if (action.type === SHOW_STATS_BEGIN) {
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    }
  }
  if (action.type === SHOW_STATS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      stats: action.payload.stats,

    }
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      search: '',

    }
  }


  /*  -------------------TEAMTRAINING------------------ */

  if (action.type === CREATE_COMMENT_BEGIN) {
    return { ...state, isLoading: true }
  }
  if (action.type === CREATE_COMMENT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'New Comment Created!',
    }
  }
  if (action.type === CREATE_COMMENT_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }
  if (action.type === GET_COMMENTS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false }
  }
  if (action.type === GET_COMMENTS_SUCCESS) {
    return {
      ...state,

      comments: action.payload.comments2,

    }
  }

  if (action.type === SET_EDIT_COMMENT) {
    const PLAYER = state.PLAYERs.find((PLAYER) => PLAYER._id === action.payload.id)
    const { _id, name, email, password, mobile, architect, developer, pmanager } = PLAYER
    return {
      ...state,
      isEditing: true,
      editPLAYERId: _id,
      name,
      email,
      password,
      mobile,
      architect,
      developer,

      pmanager,
    }
  }


  
  if (action.type === EDIT_COMMENT_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }
  if (action.type === RESET_EDIT_COMMENT) {
    return {
      ...state,
      name: "",
      email: "",
      password: "",
      mobile: "",
      pmanager: false,
      developer: false,
      architect: false,
      isEditing: false,
      editPLAYERId: "",
    }
  }
  if (action.type === EDIT_COMMENT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'Comment Updated!',
    }
  }
  if (action.type === EDIT_COMMENT_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }



  throw new Error(`no such action : ${action.type}`)
}

export default reducer
