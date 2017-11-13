import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { addMessageToChat } from '../actions/firebase-actions';

class Chat extends Component {
    render(){
        const { profile,addMessageToChat  } = this.props;
        if(!profile){
            return <div>NOT AUTHENTICATED</div>;
        }
        return (
            <div>
                <Button className="btn btn-primary" onClick={ this.props.addMessageToChat} >SEND TEST</Button> 
            </div>
        );
    }
}

function mapStateToProps(state) {
    let newProps = {
        profile: state.profile
    };
    return newProps;
}

export default connect(mapStateToProps,{ addMessageToChat})(Chat);