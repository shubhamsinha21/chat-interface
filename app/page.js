
'use client'

import React, { useState } from 'react';
import NavBar from './components/Navbar';
import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';
import Footer from './components/Footer';
import {
  ChakraProvider,
  Flex,
  Container,
} from '@chakra-ui/react';


const index = () => {
  const [chats] = useState([
    {
      id: 1,
      sender: {
        id: 1,
        name: 'John Doe',
        title: 'Hey, Hello... Nice to ....',
        image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1701815616~exp=1701816216~hmac=fa9b9dda336c972f8772d1c1102b48ec65644ec6e8b788db760ef055bc9b68a3'
      },
      senderType: 'other',
      reply: {
        sender:
        {
          id: 2,
          name: 'Jane ',
          image: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=996&t=st=1701815957~exp=1701816557~hmac=360fc8a359b330f9c85194396da862e619e420caf536177676a1b963d3986e8c'
        },
        senderType: 'you'
      },
    },
    {
      id: 2,
      sender: {
        id: 1,
        name: 'Mariam',
        title: 'I thought you ..',
        image: 'https://img.freepik.com/free-photo/close-up-portrait-cheerful-glamour-girl-with-cute-make-up-smiling-white-teeth-looking-happy-camera-standing-blue-background_1258-70300.jpg?w=996&t=st=1701816266~exp=1701816866~hmac=2fce23119935f052df25542f3034731db718c1102043bfd3a99f55322f1cdfe2'
      },
      senderType: 'other',
      reply: {
        sender:
        {
          id: 2,
          name: 'Jane',
          image: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=996&t=st=1701815957~exp=1701816557~hmac=360fc8a359b330f9c85194396da862e619e420caf536177676a1b963d3986e8c'
        }, senderType: 'you'
      },
    },


  ]);
  const [selectedChat, setSelectedChat] = useState(null);

  const isChatWindowVisible = !!selectedChat;

  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
  };

  const handleBackToChats = () => {
    setSelectedChat(null);
  };


  return (
    <ChakraProvider>
      <div style={{ background: 'black' }}>
        <Container maxW="container.xl" minH="100vh" display="flex" flexDir="column">
          <NavBar />
          <Flex flex="1">
            <ChatList chats={chats} onSelectChat={handleSelectChat} isChatWindowVisible={isChatWindowVisible} />
            <ChatWindow selectedChat={selectedChat} onBack={handleBackToChats} />
          </Flex>
          <Footer />
        </Container>
      </div >
    </ChakraProvider>
  );
};

export default index;
