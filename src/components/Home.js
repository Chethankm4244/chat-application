import React, { useEffect, useState } from 'react'
import './Home.css'
import { getDatabase,push,ref,set, onChildAdded } from "firebase/database";


const Home = () => {

    const [name,setName]= useState('');
    const [chats,setChats]= useState([]);
    const [msg ,setMsg]=useState('');

    const updateHeight = ()=>{
      const el = document.getElementById('chat');
      if(el){
        el.scrollTop=el.scrollHeight;
      }
     
    }

    const db = getDatabase();
    const chatListRef = ref(db, 'chats');
    useEffect(()=>{
        onChildAdded(chatListRef, (data) => {
            
            setChats(chats=>[...chats,data.val()])
            setTimeout(()=>{
              updateHeight()
            },100)
            
        //    console.log(data.val());
          });
    },[])

    const sendChat = ()=>{

        
        const chatRef = push(chatListRef);
        set(chatRef, {
            name,message:msg
        });

        setMsg('');
    }
  return (
    <div className='main-container'>
      
       {name?null:<div >
            <input type="text" placeholder='Enter your name to start' className='name-input' onBlur={e=>setName(e.target.value)}/>
            <button className='btn'>Submit</button>
        </div>} 
     { name?
     <div>
      <div className="user-container">
      <h3>User-Name : {name}</h3>
      </div>
        
      <div id='chat' className="chat-container">
       { chats.map((c)=>(<div  className={`container ${c.name === name ? 'me' : ""}`}>
        <p className='chatbox'>
            <strong> {c.name }: </strong>
            <span >{c.message}</span>
        </p>
        </div>) )
        }
       
       
      </div>
      <div className='btm'>
        <input type="text" onInput={e=>setMsg(e.target.value)} value={msg} placeholder='Enter your chat' />
        <button onClick={e=>sendChat()}>Send</button>
      </div>
     </div>:null}
      
    </div>
  )
}

export default Home
