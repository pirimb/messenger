import { Card, CardContent, Typography } from '@material-ui/core'
import React, { forwardRef } from 'react'
import './Message.css'


const Message = forwardRef(({message, username}, ref) => {
    const isMe = username === message.username

    return (
        <div ref={ref} className={`message ${isMe && "message__user"}`}>
            <Card className={isMe ? "message__userCard" : "message__guestCard"}>
                <CardContent>
                    <Typography 
                        color="white" 
                        variant="h5" 
                        component="h2" 
                    >
                        {!isMe && `${message.username || "Unknown User"}:`} {message.message}
                    </Typography>
                </CardContent>
            </Card>            
        </div>
    )
})

export default Message
