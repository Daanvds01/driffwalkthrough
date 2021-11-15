import React from 'react'
import Chatsearchbar from './Chatsearchbar'
import Chatlist from './Chatlist'

function Chatmenu() {
    return (
        <div className="chatmenubox">
            <Chatsearchbar/>
            <Chatlist/>
        </div>
    )
}

export default Chatmenu
