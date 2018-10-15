function checkStatus(response) {
  if ((response.status >= 100 && response.status < 300)
      || response.status === 500 || response.json) {
    return response
  }
  const error = new Error(response.statusText)
  error.response = response
  throw error
}

function checkError(err) {
  console.log(err);
}

//生成异步action的构造方法，在react页面调用他
//data是get的请求参数
export const createAction = (fetchMusicByData, startAction, endAction) => (data, cb) => dispatch => {
  dispatch(startAction());
  fetchMusicByData(data).then(checkStatus).then(res => res.json()).then(res => {
    dispatch(endAction({req: data, res}))
  }).catch(checkError)
};

