import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as actions from "./../actions"
import ArticlesContainer from "./ArticlesContainer"

function mapStateToProps(state) {
  const {articles, isLoading} = state.articles
  return {
  	articles: articles.articles,
    isLoading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchArticles: bindActionCreators(actions.fetchArticles, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer)