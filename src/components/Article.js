import React from 'react'
import {Item, Image} from 'semantic-ui-react'

class Article extends React.Component{
  render(){
    const {article} = this.props
    return(
      <Item.Group>
        <Item>
          <Item.Image as="a" href={article.url} src={article.urlToImage} />
          <Item.Content>
            <Item.Header href={article.url}>{article.title}</Item.Header>
            <Item.Description>
              {article.description}
            </Item.Description>
            <Item.Extra>{article.publishedAt}</Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    )
  }
}

export default Article