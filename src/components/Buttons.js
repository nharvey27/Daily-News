import React from 'react'
import {apiSources} from '../lib/apiSources'
import { Container, Button, Grid } from 'semantic-ui-react'

class Buttons extends React.Component{
  render(){
    return (
      <Button.Group style={{"width" : "100%", "height": "100vh", "overflow": "scroll"}}  basic vertical> 
        {Object.keys(apiSources).map((key) => {return(<Button key={key} onClick={() => this.props.handleClick(apiSources[key])} >{key}</Button>)})}
      </Button.Group>
    )
  }
}

export default Buttons