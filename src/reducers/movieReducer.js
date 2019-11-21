export default function movieReducer(
  state = { movies: [], isLoading: true, error: null },
  action
) {
  switch (action.type) {
    case "FETCH_MOVIES":
      return {
        movies: action.payload,
        loading: false
      };
    case "FETCH_MOVIES_ERROR":
      return {
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}
