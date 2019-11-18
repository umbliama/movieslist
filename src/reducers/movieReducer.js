export default function movieReducer(
  state = { movies: [], isLoading: true },
  action
) {
  switch (action.type) {
    case "FETCH_MOVIES":
      return {
        movies: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
