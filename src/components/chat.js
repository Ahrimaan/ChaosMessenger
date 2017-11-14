import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { addMessageToChat } from '../actions/firebase-actions';
import ChatList from './chat-list';
import ChatInput from './chat-input';

export default class Chat extends Component {
    renderEmtpy() {
        return <div></div>;
    }

    render() {
        return (
            <div>
                <ChatList />
                <ChatInput />
            </div>
        );        
    }
}