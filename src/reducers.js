export const reducer = (state, action) => {
  if (action.type === 'empty') {
    return state;
  }
  if (action.type === 'fetch') {
    fetch(url, {
      signal: abort.signal
    }).then(resp => resp.json())
      .then(json => {
        updateData(json);
      });
  }
}