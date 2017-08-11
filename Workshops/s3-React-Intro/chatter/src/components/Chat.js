import React from 'react';
import Post from './Post';


const chatStyle = {
  width: '40%'
}

const Chat = (props) =>
  <div style={ chatStyle }>
    {
      props.chats.map((chatItem, index) =>
        <Post chatItem={chatItem} key={index} />
      )
    }
  </div>

export default Chat
