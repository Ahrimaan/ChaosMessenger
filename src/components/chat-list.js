import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { addMessageToChat, subscribeOnChat } from '../actions/firebase-actions';
import ChatItem from './chat-list-item';

class Chat extends Component {
    componentDidMount() {
        if (this.props.profile) {
            this.props.subscribeOnChat();
        }
    }

    renderEmtpy() {
        return <div></div>;
    }

    renderMessageList() {
        if(this.props.messages.length >= 1){
           return this.props.messages.map((item) => {
                <ChatItem message={ item } />
            });
        }else{
            return <div>No messages......</div>
        }
        
    }

    render() {
        const { profile, messages } = this.props;
        if (!profile) {
            return this.renderEmtpy();
        }
        if (messages) {
            return (
                <ul>
                    { this.renderMessageList() }
                </ul>
            ) 
        }
        return <div>no messages so far.....</div>
    }


}

function mapStateToProps(state) {
    let newProps = {
        profile: state.profile,
        messages: state.firebase ? state.firebase : []
    };
    return newProps;
}

export default connect(mapStateToProps, { addMessageToChat, subscribeOnChat })(Chat);