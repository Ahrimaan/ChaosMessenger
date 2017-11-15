import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChatList from './chat-list';
import ChatInput from './chat-input';
import { subscribeOnChat,addMessageToChat } from '../actions/firebase-actions';

class Chat extends Component {
    render() {
        const {addMessageToChat,userid,username } = this.props;
        return (
            <div>
                <ChatList />
                <ChatInput onMessageInput= { addMessageToChat } userid={ userid } username={ username } />
            </div>
        );        
    }
}

function mapStateToProps(state) {
    let newProps = {
        userid:state.profile ? state.profile .user_id : '',
        username:state.profile ?  state.profile.name : '',
        profile: state.profile,
        messages: state.firebase ? state.firebase : []
    };
    return newProps;
}

export default connect(mapStateToProps,{ subscribeOnChat, addMessageToChat})(Chat);