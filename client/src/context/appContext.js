/* FUNCTIONS */

import React, { useReducer, useContext, useEffect } from 'react'
import reducer from './reducer.js'
import axios from 'axios'
import {
  DISPLAY_ALERT,
  DISPLAY_ALERT_BLANK,
  CLEAR_ALERT,
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
  GET_COMMENTS_BEGIN,
  GET_COMMENTS_SUCCESS,
  SET_EDIT_PLAYER,
  DELETE_PLAYER_BEGIN,
  EDIT_PLAYER_BEGIN,
  EDIT_PLAYER_SUCCESS,
  EDIT_PLAYER_ERROR,
  RESET_EDIT_PLAYER,
  SHOW_STATS_BEGIN,
  SHOW_STATS_SUCCESS,
  CLEAR_FILTERS,
  /*  --------COMMENTS-------- */
  CREATE_COMMENT_BEGIN,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_ERROR,
  GET_TEAMTRAININGS_BEGIN,
  GET_TEAMTRAININGS_SUCCESS,
  SET_EDIT_COMMENT,
  DELETE_COMMENT_BEGIN,
  EDIT_COMMENT_BEGIN,
  EDIT_COMMENT_SUCCESS,
  EDIT_COMMENT_ERROR,
  RESET_EDIT_COMMENT,



} from './actions'

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const userLocation = localStorage.getItem('location')

const initialState = {

  showAlert: false,
  alertText: "",
  alertType: "",
  isEditing: false,
  /*  --------PLAYERS-------- */
  postId: 1,
  blogId: 1,
  blogTitle: "",
  blogDate: "",
  blogAuthor: "",
  blogDescription: "",

  blogs: [],
  blogs2: [],
  comments: [],
  searchPosition: "",

  id: 0,
  parent_id: 0,
  date: "",
  user: "",
  content: "",

  editedContent: "",

  commentCount:0,

  Addparent_id: 0,
  Adddate: "",
  Adduser: "",
  Addcontent: "",


  Author: "",
  Text: "",


  authorSearch: "",
  titleSearch: "",

fetching:false,





}




const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  /*  ----------------PLAYERS-------------------- */


  const setEdit = () => {
    dispatch({
      type: RESET_EDIT_PLAYER,
    })
  }
  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT })
 
    console.log("benfica");
  }
  const displayAlertBlank = () => {

    dispatch({ type: DISPLAY_ALERT_BLANK })
    clearAlert()
  }
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT })
    }, 13000)
  }
  const handleChange = async ({ name, value }) => {
    console.log("handle");
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } })
  }



  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES })
  }
  const createPlayer = async () => {
    /*  dispatch({ type: CREATE_PLAYER_BEGIN })
     try {
       const { name, birth, country, nativeLanguage, clubLanguageLevel, mobile, position, secondaryPosition, foot, mentality, height, weight, Attacking, Midfield, Defending, Goalkeeping, currentlyWorkingOn } = state
       await playersFetch.post('', {
         name,
         birth,
         country,
         nativeLanguage,
         clubLanguageLevel,
         mobile,
         position,
         secondaryPosition,
         foot,
         mentality,
         height,
         weight,
         Attacking,
         Midfield,
         Defending,
         Goalkeeping,
         currentlyWorkingOn,
       })
 
       dispatch({ type: CREATE_PLAYER_SUCCESS })
       dispatch({ type: CLEAR_VALUES })
     } catch (error) {
       if (error.response.status === 401) return
       dispatch({
         type: CREATE_PLAYER_ERROR,
         payload: { msg: error.response.data.msg },
       })
     }
     clearAlert() */
  }
  const getBlogs = async () => {
    const { searchPosition } = state

    let url = `http://localhost:9000/posts`
    /*   if (searchPosition) {
           url = url + `?position=${searchPosition}`
         }  */
    dispatch({ type: GET_BLOGS_BEGIN })
    try {
      const data = await fetch(url)

      const blogs = await data.json()

      dispatch({
        type: GET_BLOGS_SUCCESS,
        payload: {
          blogs,

        },

      })
      let name = "blogs2"
      let value = blogs
      dispatch({ type: HANDLE_CHANGE, payload: { name, value } })
    } catch (error) {

    }
    clearAlert()
      ;
  }
  const getBlog = async () => {
    console.log("get");
    const { postId,fetching } = state

    
    let url = `http://localhost:9000/posts/${(localStorage.getItem("postId" ))}`

    dispatch({ type: GET_BLOG_BEGIN })
    try {
      const data2 = await fetch(url)

      const blogs2 = await data2.json()
      console.log(blogs2);
      dispatch({
        type: GET_BLOG_SUCCESS,
        payload: {
          blogs2,
          fetching
        },

      })

    } catch (error) {

    }
    clearAlert()
      ;
  }

  const cpto = async () => {

  }
  const setBlog = (id) => {
    handleChange("id", id)

    dispatch({ type: SET_EDIT_PLAYER, payload: { id } })
  }
  const editPlayer = async () => {
    /*   dispatch({ type: EDIT_PLAYER_BEGIN })
  
      try {
        const { name, email, password, mobile, pmanager, developer, architect } = state
        await playersFetch.patch(`${state.editPLAYERId}`, {
          name,
          email,
          password,
          mobile,
          pmanager,
          developer,
          architect
        })
        dispatch({ type: EDIT_PLAYER_SUCCESS })
        dispatch({ type: CLEAR_VALUES })
      } catch (error) {
        if (error.response.status === 401) return
        dispatch({
          type: EDIT_PLAYER_ERROR,
          payload: { msg: error.response.data.msg },
        })
      }
      clearAlert() */
  }
  const deletePlayer = async (PLAYERId) => {
    /*  dispatch({ type: DELETE_PLAYER_BEGIN })
     try {
       await playersFetch.delete(`/${PLAYERId}`)
 
     } catch (error) {
 
     } */
  }
  const showStats = async () => {
    /*  dispatch({ type: SHOW_STATS_BEGIN })
     try {
       const { data } = await playersFetch('/stats')
       console.log(data);
       dispatch({
         type: SHOW_STATS_SUCCESS,
         payload: {
           stats: data.defaultStats,
 
         },
       })
     } catch (error) {
 
     }
     clearAlert() */
  }
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS })
  }

  /*  -------------------Comments------------------ */

  const commentsFetch = axios.create({
    baseURL: 'http://localhost:9000/posts',
  })

  const commentsUpdateFetch = axios.create({
    baseURL: 'http://localhost:9000/comments',
  })


  const getComments = async () => {
    const { searchPosition, postId, comments, commentDate } = state




    let url = `http://localhost:9000/posts/${(localStorage.getItem("postId" ))}/comments`
    /*   if (searchPosition) {
           url = url + `?position=${searchPosition}`
         }  */
    dispatch({ type: GET_COMMENTS_BEGIN })
    try {
      const data = await fetch(url)

      const comments2 = await data.json()

      dispatch({
        type: GET_COMMENTS_SUCCESS,
        payload: {
          comments2,

        },

      })

    } catch (error) {

    }
    clearAlert()
      ;
  }


  const CreateComment = async () => {
    const { searchPosition, postId, comments, commentDate, Author, Text } = state
    const date2 = new Date();
    const currentYear = date2.getFullYear();
    let currentMonth = date2.getMonth() + 1;
    const currentDay = date2.getDate();


    console.log("1")
    if (currentMonth === 1 || currentMonth === 2 || currentMonth === 3 || currentMonth === 4 || currentMonth === 5 || currentMonth === 6 || currentMonth === 7 || currentMonth === 8 || currentMonth === 9) {
      currentMonth = `0${currentMonth}`
    }


    let content = "";
    let user = "";
    let date = "";
    date = `${currentYear}-${currentMonth}-${currentDay}`



    user = Author

    content = Text








    let url = `http://localhost:9000/posts/${postId}/comments`


    dispatch({ type: CREATE_COMMENT_BEGIN })

    try {



      const { parent_id, } = state
      console.log(user);
      console.log(content)
      await commentsFetch.post(`${postId}/comments`, {
        postId,
        parent_id,
        user,
        date,
        content
      })
      console.log(content)
      dispatch({ type: CREATE_COMMENT_SUCCESS })
      dispatch({ type: CLEAR_VALUES })
    } catch (error) {
      if (error.response.status === 401) return
      dispatch({
        type: CREATE_COMMENT_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
      ;
  }


  const setEditComment = (id) => {
    dispatch({ type: SET_EDIT_COMMENT, payload: { id } })
  }



  const editComment = async () => {
    const { editedContent } = state
    const date2 = new Date();
    const currentYear = date2.getFullYear();
    let currentMonth = date2.getMonth() + 1;
    const currentDay = date2.getDate();



    if (currentMonth === 1 || currentMonth === 2 || currentMonth === 3 || currentMonth === 4 || currentMonth === 5 || currentMonth === 6 || currentMonth === 7 || currentMonth === 8 || currentMonth === 9) {
      currentMonth = `0${currentMonth}`
    }


    let date = `${currentYear}-${currentMonth}-${currentDay}`

    let content = editedContent


    try {
      const { id, parent_id, user, postId } = state


      await commentsUpdateFetch.put(`${id}`, {
        id,
        postId,
        parent_id,
        date,
        user,
        content
      })
      dispatch({ type: EDIT_COMMENT_SUCCESS })
      dispatch({ type: CLEAR_VALUES })
    } catch (error) {
      if (error.response.status === 401) return
      dispatch({
        type: EDIT_COMMENT_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }







  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,

        handleChange,
        displayAlertBlank,
        clearValues,
        createPlayer,
        getBlogs,
        getBlog,
        getComments,
        CreateComment,
        editComment,
/*         setEditPlayer,
 */        deletePlayer,
        editPlayer,
        showStats,
        setEdit,
        clearFilters,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}




const useAppContext = () => {
  return useContext(AppContext)
}


export { AppProvider, initialState, useAppContext }