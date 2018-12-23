import React, { Component } from 'react';
import styled from 'tachyons-components';

const Form = styled('div')`
pa2 w-100
`;

const Field = styled('div')`
flex items-stretch
`

const Input = styled('input')`
ba bw1 b--near-white br1 pa2 w-75 f6
`
const Button = styled('button')`
w-25 bg-blue white bw0 f6 pointer link
`

export default class VtexSearchForm extends Component {
    constructor(props) {
        super(props);

        this.onTextChanged = this.onTextChanged.bind(this);
        this.renderResult = this.renderResult.bind(this);

        this.state = {
            result: [],
            text: '',
        }

    }

    onSubmit = () => {
        if(value.length >= 3){
            result = ''
        }
    }

    onTextChanged = (e) => {
        const value = e.target.value;
        let result = [];

        if(value.length >= 3){
            result = ''
        }

        this.setState(() => ({result, text: value}));
    }

    renderResult () {
        const { result } = this.state;
        if( result.length === 0 ){
            return null;
        }

        return (
            <ul>
                { result.map(item => <li>{item}</li>)}
            </ul>
        )
    }

    render () {
        const { text } = this.state;
        return (
            <Form className="search-form">
                <Field className="search-form__field">
                    <Input className="search-form__input" value={text} type="search" onChange={this.onTextChanged} />
                    <Button className="search-form__button">Buscar</Button>
                </Field>

                {this.renderResult}
            </Form>
        )
    }
}