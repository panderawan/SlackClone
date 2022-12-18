import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';

import {
  collection,
  addDoc,
  doc,
  updateDoc,
  setDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { useState } from 'react';
import { auth, db } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function ChatInput({ channelName, channelId, chatRef }) {
  const [input, setInput] = useState('');
  const [user] = useAuthState(auth)

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!channelId) {
      return false;
    }
    // v8 firebase
    // db.collection('rooms').doc(channelId).collection('messages').add({
    //   message: inputRef.current.value,
    //   timestamp: firebase.firestore.FieldValue.serverTimeStamp(),
    //   user: 'Ruddy Autem',
    //   userImage: 'https://www.pngmart.com/files/2/Zelda-Link-PNG-Picture.png',
    // });

    // const reference = doc(db, 'rooms', channelId);
    // await updateDoc(reference, {
    //   message: input,
    //   timestamp: serverTimestamp(),
    //   user: 'Ruddy Autem',
    //   userImage: 'https://www.pngmart.com/files/2/Zelda-Link-PNG-Picture.png',
    // });

    // const docRef = await addDoc(collection(db, 'rooms', channelId), {
    //   message: input,
    //   timestamp: serverTimestamp(),
    //   user: 'Ruddy Autem',
    //   userImage: 'https://www.pngmart.com/files/2/Zelda-Link-PNG-Picture.png',
    // });

    const docRef = doc(db, 'rooms', channelId);
    const colRef = collection(docRef, 'messages');
    addDoc(colRef, {
      message: input,
      timestamp: serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    });

    chatRef.current.scrollIntoView({
      behavior: 'smooth',
    });

    setInput('');
  };

  return (
    <ChatInputContainer>
      <form action=''>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Messages #${channelName}`}
        />
        <Button hidden type='submit' onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid grey;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }
  > form > Button {
    display: none;
  }
`;
