import React from 'react';

let ChatItem =({message}) => {
    return (
        <li>{message.message}</li>
    );
}

export default ChatItem;