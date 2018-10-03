import Article from './Article';
import ArticleLoader from './Loader';
import { apiSources } from '../lib/apiSources';
import { Container, Button, Grid } from 'semantic-ui-react';
import Nav from './Nav';
import React from 'react';
import ReactDOM from 'react-dom';
import Buttons from './Buttons';

class ArticlesContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchArticles('the-next-web');
  }

  handleClick = value => {
    this.props.fetchArticles(value);
  };

  render() {
    var { articles = [] } = this.props;

    return (
      <Container>
        <Nav />
        <Grid>
          <Grid.Column mobile={8} computer={4}>
            <div>
              <Buttons handleClick={this.handleClick} />
            </div>
          </Grid.Column>
          <Grid.Column mobile={8} computer={12}>
            {this.props.isLoading ? (
              <ArticleLoader />
            ) : (
              <div>
                {' '}
                {articles.map(item => (
                  <Article key={articles.indexOf(item)} article={item} />
                ))}{' '}
              </div>
            )}
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default ArticlesContainer;
