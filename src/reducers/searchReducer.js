export default function searchReducer(state = { searchValue: null }, action) {
  switch (action.type) {
    case "SET_SEARCH_VALUE":
      return {
        searchValue: action.search
      };
    default:
      return state;
  }
}
