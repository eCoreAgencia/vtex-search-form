import React, { Component } from 'react';
import styled from 'tachyons-components';




const Hello = styled('div')`
${props => props.theme ? props.theme : 'f4'}
`

class HelloWorld extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <Hello className="custom__class" theme={this.props.theme}>Hello World 2</Hello>
        )
    }

}


export default HelloWorld;