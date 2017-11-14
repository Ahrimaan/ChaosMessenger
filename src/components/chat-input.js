import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Row } from 'react-bootstrap';
import { addMessageToChat } from '../actions/firebase-actions';

class ChatInput extends Component {
    constructor(props){
        super(props);
        this.onInputChanged = this.onInputChanged.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.state = {
            text:''
        };
    }

    onInputChanged(input){
        this.setState({ text: input.target.value });
    }

    sendMessage(){
        let message = {
            userid: this.props.userid,
            message: this.state.text,
            username: this.props.username
        }
        this.props.addMessageToChat(message);
        this.setState({text:''});
    }

    render(){
        return (
            <div>
                <Row>
                    <input type="text" value={this.state.text} placeholder="type in your message" onChange={ this.onInputChanged }></input>
                    <Button className="btn btn-primary" onClick={ this.sendMessage }>Send Message</Button>
                </Row>
            </div>
        );
    }
}

function mapStateToProps(state) {
    if(state.profile){
        return {
            userid:state.profile.user_id,
            username:state.profile.name
        };
    }
    return {};
}

export default connect(mapStateToProps,{ addMessageToChat })(ChatInput);