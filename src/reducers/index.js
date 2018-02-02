const defaultState = {
  searchText: null,
  searchResults: [],
  searchEnable: false,
  showModal: false,
  selectedGif: null
};

const global = (state = defaultState, action) => {
  switch (action.type) {
  case 'SEARCH_GIFS':
      return Object.assign({},
        state,
        {
          searchText: action.payload.searchText,
          searchResults: action.payload.searchResults,
          searchEnable: action.payload.searchEnable
        }
      );
    case 'ADD_MORE_GIFS':
        return Object.assign({},
          state,
          {
            searchResults: action.payload.searchResults
          }
        );
    case 'TOGGLE_MODAL':
        return Object.assign({},
          state,
          {
            showModal: !state.showModal
          }
        );
    case 'SELECTED_GIF':
        return Object.assign({},
          state,
          {
            selectedGif: action.payload
          }
        );
    default:
      return state;
  }
};

export default global;
