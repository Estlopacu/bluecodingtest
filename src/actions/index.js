export const searchGifs = (payload) => {
  return {
    type: 'SEARCH_GIFS',
    payload
  };
};

export const addMore = (payload) => {
  return {
    type: 'ADD_MORE_GIFS',
    payload
  };
};

export const toggleModal = () => {
  return {
    type: 'TOGGLE_MODAL'
  };
};

export const selectedGif = (payload) => {
  return {
    type: 'SELECTED_GIF',
    payload
  };
};
