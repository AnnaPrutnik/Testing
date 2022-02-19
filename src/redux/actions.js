export const addMsg = (msg) => ({
  type: 'addMsg',
  payload: {
    ...msg,
  },
});

export const deleteMsg = (id) => ({
  type: 'deleteMsg',
  payload: id,
});
