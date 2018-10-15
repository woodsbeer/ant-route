import fetch from 'fetch-jsonp'

export const fetchJsonP = (url, params) => {
  return fetch(url, {...params})
}
export const getFetchbyUrl = url => query => {
  const params = {
    method: 'GET'
  }
  let queryStr = '?'
  if (query) {
    for (const key in query) {
      queryStr += `${key}=${query[key]}&`
    }
    queryStr.slice(0, queryStr.length - 1)
    url = url + queryStr;
  }
  return fetchJsonP(url, params)
}

