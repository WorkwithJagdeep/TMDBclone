const initialState = {
    movies: [],
}

const reducer = (state = initialState ,action) => {
    switch (action.type) {
        case "Get_movie":
            return {
            ...state,
            movies: [action.payload],
          };
        default:
            return state;
    }


}
export default reducer
