const initialState = {
  activeFilter: "none",
  filterValues: {
    weight: 300,
    height: 7,
    none: 0
  }
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case ('TOGGLE_FILTER'):
      const { filterName } = action.payload;
      return {
        ...state,
        activeFilter: filterName
      }
    case ('CHANGE_FILTER_VALUE'):
      const { options } = action.payload;
      return {
        ...state,
        filterValues: {
          ...state.filterValues,
          [options.filterName]: options.filterValue,
        }
      }
    default:
      return state;
  }
};

export default rootReducer;