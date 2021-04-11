import './App.css';
import { useEffect, useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase'
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';



function App() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])
    const [username, setUsername] = useState('')

    useEffect(() => {
        db.collection("messages")
          .orderBy("timestamp", "desc")
          .onSnapshot((snapshot) => {
            setMessages(snapshot.docs.map((doc) => ({id: doc.id, data: doc.data()})));
          });
    },[])

    useEffect(() => {
        setUsername(prompt("Enter your name please"))
    },[])

    const sendMessage = (e) => {
        e.preventDefault()

        db.collection('messages').add({
            message: input,
            username: username,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('')

    }
    
    return (
        <div className="App">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/1024px-Facebook_Messenger_logo_2020.svg.png" alt="" style={{height:"150px"}} />
            <h1 style={{color:"#367df7"}}>Messenger</h1>
            <h2 style={{color:"#8a36f7"}}>Welcome, {username}</h2>
            
            <form className="app__form">
                <FormControl className="app__formControl">
                    <Input className="app__formInput" placeholder="Enter your message" value={input} 
                        onChange={(e) => setInput(e.target.   value)} type="text"
                    />
                    <div className="app__formButton">
                        <IconButton  disabled={!input} variant="contained" 
                            color="primary"  
                            type="submit" 
                            onClick={sendMessage} 
                        >
                            <SendIcon />
                        </IconButton>
                    </div>
                </FormControl>
            </form>

            <FlipMove>
                {
                    messages.map(({id, data}) => (
                        <Message key={id} username={username} message={data} />
                    ))
                }
            </FlipMove>
        </div>
    );
}

export default App;
