export function fetchArticles(apiSource){
	return async dispatch => {
		var url = `https://newsapi.org/v1/articles?source=${apiSource}&apiKey=9f0fce975f4642d5819401940959fdda`
		dispatch(articlesAreLoading(true))
		var response = await fetch(url)
		var data = await response.json()
		dispatch(setArticles(data))
		dispatch(articlesAreLoading(false))
	}
}

export function setArticles(articles){
	return {
		type: "SET_ARTICLES",
		articles
	}
}

export function articlesAreLoading(bool){
	return {
		type: "ARTICLES_ARE_LOADING",
		isLoading: bool
	}
}