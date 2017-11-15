import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Row } from 'react-bootstrap';
import { addMessageToChat } from '../actions/firebase-actions';

class ChatInput extends Component {
    constructor(){
        super();
        this.onInputChanged = this.onInputChanged.bind(this);
        this.submit = this.submit.bind(this);
        this.state = {
            text:''
        };
    }

    onInputChanged(input){
        this.setState({ text: input.target.value });
    }

    submit(){
        let { onMessageInput } = this.props;
        let message = {
            userid: this.props.userid,
            message: this.state.text,
            username: this.props.username
        }
        onMessageInput(message);
        this.setState({text:''});
    }

    render(){
        return (
            <div>
                <Row>
                    <input type="text" value={this.state.text} placeholder="type in your message" onChange={ this.onInputChanged }></input>
                    <Button className="btn btn-primary" onClick={ this.submit }>Send Message</Button>
                </Row>
            </div>
        );
    }
}

export default ChatInput;