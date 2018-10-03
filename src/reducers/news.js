const initialState = {
  articles: [],
  isLoading: false
}

export const articles = (state = initialState, action) => {
  switch(action.type){
    case "SET_ARTICLES":
      return setArticles(state, action)
    case "ARTICLES_ARE_LOADING":
      return articlesAreLoading(state, action)
  }
  return state;
}

export function setArticles(state, action){
  var {articles} = action
  return {...state, articles}
}

export function articlesAreLoading(state, action){
  var {isLoading} = action
  return {...state, isLoading}
}