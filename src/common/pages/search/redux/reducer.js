import {REQUIREMUSIC,REQUISTMUSIC} from './actionType'
const initState = {loading:false}
export  default   (state =initState,action)=>{
  switch (action.type){
    case REQUIREMUSIC:
      return {...state,loading :true}
    case REQUISTMUSIC:
      return {...state,loading:false,musicList:action.data.res.song_list}
    default:return{...state}
  }
}

