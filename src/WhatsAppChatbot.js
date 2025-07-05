import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, ListGroup, Badge, Form, Button, InputGroup } from 'react-bootstrap';
import { FiMoreVertical, FiSearch, FiPaperclip, FiMic, FiSmile } from 'react-icons/fi';
import { BsCheck2All, BsThreeDotsVertical } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';
import './App.css';



const WhatsAppChatbot = () => {
  const [activeChat, setActiveChat] = useState(1);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const chats = [
    {
      id: 1,
      name: 'Bill Kuphal',
      status: '',
      lastMessage: 'The weather will be perfect for th...',
      time: '2:14 PM',
      unread: false,
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    {
      id: 2,
      name: 'Photographers',
      lastMessage: "Here're my latest drone shots",
      time: '9:16 AM',
      unread: true,
      avatar: 'https://i.pravatar.cc/150?img=2'
    },
    {
      id: 3,
      name: 'Daryl Bogisich, Ian Daniel, +1',
      lastMessage: 'You: Store is out of stock',
      time: 'Yesterday',
      unread: false,
      avatar: 'https://i.pravatar.cc/150?img=3'
    },
    {
      id: 4,
      name: 'SpaceX Crew-16 Launch',
      lastMessage: "I've been there!",
      time: 'Thursday',
      unread: false,
      avatar: 'https://i.pravatar.cc/150?img=4'
    },
    {
      id: 5,
      name: 'Leia Walsh',
      lastMessage: 'Next time it\'s my turn!',
      time: '12/22/21',
      unread: false,
      avatar: 'https://i.pravatar.cc/150?img=5'
    },
    {
      id: 6,
      name: 'Roland Marks',
      lastMessage: '@waldo Glad to hear that 😊',
      time: '12/16/21',
      unread: false,
      avatar: 'https://i.pravatar.cc/150?img=6'
    },
    {
      id: 7,
      name: 'Helen Flatley',
      lastMessage: 'You: Ok',
      time: '12/13/21',
      unread: false,
      avatar: 'https://i.pravatar.cc/150?img=7'
    }
  ];

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Bill Kuphal',
      text: 'Who was that philosopher you shared with me recently?',
      time: '2:14 PM',
      isMe: false,
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    {
      id: 2,
      sender: 'You',
      text: 'That\'s him! What was his vision statement?',
      time: '2:18 PM',
      isMe: true,
      read: true
    },
    {
      id: 3,
      sender: 'Roland Barthes',
      text: '',
      time: '2:16 PM',
      isMe: false,
      isSystem: true
    },
    {
      id: 4,
      text: '"Ultimately in order to see a photograph well, it is best to look away or close your eyes."',
      time: '2:16 PM',
      isMe: false,
      isQuote: true
    },
    {
      id: 5,
      sender: 'Roland Barthes',
      text: 'Aerial photograph from the Helsinki urban environment division.',
      time: '2:20 PM',
      isMe: false,
      isSystem: true
    },
    {
      id: 6,
      text: '',
      time: '2:20 PM',
      isMe: false,
      isSystem: true
    },
    {
      id: 7,
      sender: 'Aerial photograph from the Helsinki urban environment division',
      text: 'Check this https://dribbble.com',
      time: '2:22 PM',
      isMe: false,
      isLink: true
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const newMsg = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'You',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true,
      read: false
    };

    setMessages([...messages, newMsg]);
    setInputMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "I'm a chatbot. How can I assist you further?",
        "Interesting! Tell me more about that.",
        "I'll make a note of that information.",
        "Thanks for your message!",
        "I'm still learning. Could you rephrase that?"
      ];
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botMsg = {
        id: messages.length + 2,
        text: randomResponse,
        sender: activeChat ? chats.find(c => c.id === activeChat).name : 'Chatbot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isMe: false
      };

      setMessages(prev => [...prev, botMsg]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  

  return (
    <Container fluid className="whatsapp-container">
      <Row className="h-100">
        {/* Sidebar */}
        <Col md={4} className={`sidebar p-0 ${activeChat ? 'd-none d-md-block' : ''}`}>
          {/* User header */}
          {/* <div className="user-header d-flex justify-content-between align-items-center p-3">
            <div className="user-avatar">
              <img src="https://i.pravatar.cc/150?img=8" alt="User" className="rounded-circle" />
            </div>
            <div className="user-actions">
              <BsThreeDotsVertical size={20} />
            </div>
          </div> */}
          
          {/* Search */}
          <div className="search-bar my-2 px-5 ">
            <InputGroup >
            
              <InputGroup.Text > 
                <FiSearch  />
              </InputGroup.Text  >
              <Form.Control  type="text" placeholder="Search" />
            </InputGroup>
          </div>
          
          {/* Chat list */}
          <div className="chat-list">
            {chats.map(chat => (
              <div 
                key={chat.id} 
                className={`chat-item d-flex p-3 ${activeChat === chat.id ? 'active' : ''}`}
                onClick={() => setActiveChat(chat.id)}
              >
                <div className="chat-avatar me-3">
                  <img src={chat.avatar} alt={chat.name} className="rounded-circle" />
                </div>
                <div className="chat-info flex-grow-1">
                  <div className="d-flex justify-content-between">
                    <h6 className="mb-0">{chat.name}</h6>
                    <small className="text-muted">{chat.time}</small>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0 text-muted text-truncate">{chat.lastMessage}</p>
                    {chat.unread > 0 && (
                      <span className="badge bg-primary rounded-circle">{chat.unread}</span>
                    )}
                  </div>
                  {/* {chat.id === 1 && (
                    <small className="text-success">{chat.status}</small>
                  )} */}
                </div>
              </div>
            ))}
          </div>
        </Col>
        
        {/* Chat area */}
        <Col md={8} className={`chat-area p-0 ${!activeChat ? 'd-none d-md-block' : ''}`}>
          {activeChat ? (
            <>
              {/* Chat header */}
              <div className="chat-header d-flex justify-content-between align-items-center p-3">
                <div className="d-flex align-items-center">
                  <BiArrowBack 
                    className="me-2 d-md-none" 
                    size={20} 
                    onClick={() => setActiveChat(null)} 
                  />
                  <div className="chat-avatar me-3">
                    <img src={chats.find(c => c.id === activeChat).avatar} alt="" className="rounded-circle" />
                  </div>
                  <div>
                    <h6 className="mb-0">{chats.find(c => c.id === activeChat).name}</h6>
                    <small className="text-muted">{chats.find(c => c.id === activeChat).status}</small>
                  </div>
                </div>
                <div>
                </div>
              </div>
              
              {/* Messages */}
              <div className="messages-container">
                {messages.map(message => (
                  <div 
                    key={message.id} 
                    className={`message ${message.isMe ? 'sent' : 'received'} ${message.isSystem ? 'system-message' : ''}`}
                  >
                    {!message.isMe && !message.isSystem && (
                      <div className="sender-name">{message.sender}</div>
                    )}
                    <div className="message-bubble">
                      {message.isLink ? (
                        <a href={message.text.split(' ')[1]} target="_blank" rel="noopener noreferrer">
                          {message.text}
                        </a>
                      ) : (
                        <p>{message.text}</p>
                      )}
                      <div className="message-time">
                        <small>{message.time}</small>
                        {message.isMe && (
                          <BsCheck2All className={`ms-1 ${message.read ? 'text-primary' : 'text-muted'}`} />
                        )}
                        {message.isSystem && <span className="heart-icon"></span>}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              
              {/* Message input */}
              <div className="message-input p-3">
                <div className="d-flex align-items-center">
                  <FiSmile className="mx-2" />
                  <FiPaperclip className="mx-2" />
                  <Form.Control
                    as="textarea"
                    rows={1}
                    placeholder="Type your message"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                  <Button variant="link" className="mx-2">
                    {inputMessage.trim() === '' ? <FiMic /> : <span onClick={handleSendMessage}>Send</span>}
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="d-flex flex-column justify-content-center align-items-center h-100">
              <div className="text-center p-4">
                <h4>WhatsApp Web</h4>
                <p className="text-muted">Select a chat to start messaging</p>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default WhatsAppChatbot;