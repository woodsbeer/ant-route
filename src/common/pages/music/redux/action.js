import {REQUIREMUSIC,REQUISTMUSIC} from './actionType'
import {createAction} from '../../../utils/actionUtils'
import  {fetchMusicByData} from '../../../api/music'

export const requireMusic = ()=> ({type:REQUIREMUSIC})
export const requistMusic = (data)=> ({type:REQUISTMUSIC,data});
export const fetchMusic = createAction(fetchMusicByData,requireMusic,requistMusic);