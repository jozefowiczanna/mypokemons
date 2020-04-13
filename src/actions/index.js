export const toggleFilter = (filterName) => {
  return {
    type: 'TOGGLE_FILTER',
    payload: {
      filterName
    }
  }
}

export const changeFilterValue = (options) => {
  return {
    type: 'CHANGE_FILTER_VALUE',
    payload: {
      options
    }
  }
}