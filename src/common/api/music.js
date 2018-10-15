import {getFetchbyUrl} from '../utils/fetch'
//得到指定页面的fetch到的promise对象
export const fetchMusicByData =  getFetchbyUrl('http://tingapi.ting.baidu.com/v1/restserver/ting');