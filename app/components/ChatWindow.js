import {
    Box,
    Flex,
    Button,
    VStack,
    HStack,
    Image,
    Text,
    Textarea,
    Input,
} from '@chakra-ui/react';

import Message from './Message';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";

const ChatWindow = ({ selectedChat, onBack, onDelete }) => {
    return (
        <Box p="4"
            flex="1"
            bg="white"
            flexDir="column"
            h="4xl"
            background='#181818'
            marginLeft={4}
            marginTop={4}
            borderRadius={10}>
            <Flex justify="space-between" mb="4" background='#2f2f2f' borderRadius={10} justifyContent='space-between' mt={-4} w='100%' p={2}>
                <HStack spacing="2" alignSelf="flex-start" >
                    {selectedChat ? (
                        <>
                            <Image src={selectedChat.sender.image} alt={selectedChat.sender.name} boxSize="30px" borderRadius="full" />
                            <Box color='white'>{selectedChat.sender.name}</Box>
                        </>
                    ) : null
                    }

                </HStack>
                <HStack gap={4}>
                    <Text onClick={onBack} color='white' cursor='pointer' display='flex' gap={1} alignItems='center'>
                        <IoArrowBackCircleOutline />
                        Back
                    </Text>
                    <Text variant="outline" colorScheme="red" cursor='pointer' color='white' display='flex' gap={1} alignItems='center'>
                        <RiDeleteBinLine />
                        Delete
                    </Text>
                </HStack>
            </Flex>
            {selectedChat ? (
                <VStack spacing="4" flex="1" overflowY="auto" >

                    <Message text="Hi there!" sender={selectedChat.senderType} image={selectedChat.sender.image} />
                    <Message text="Hello! How are you?" sender="you" />
                    <Message text="I'm good, thanks!" sender={selectedChat.senderType} image={selectedChat.sender.image} />
                    <Message text="How about you?" sender={selectedChat.senderType} image={selectedChat.sender.image} />
                    <Message text="I'm doing well too. Thanks for asking!" sender="you" />
                    <Message text="This chat interface is nice!" sender={selectedChat.senderType} image={selectedChat.sender.image} />
                    <Message text="You are correct!!" sender="you" />
                    <Message text="Little more changes and this interface will be the best.." sender={selectedChat.senderType} image={selectedChat.sender.image} />
                    <Message text="Exactly!" sender="you" />

                    {/* Adding the reply with image on the right side */}

                    <HStack spacing="2" alignSelf="flex-end">
                        <Box color='white'>{selectedChat.reply.sender.name}</Box>
                        <Image src={selectedChat.reply.sender.image} alt={selectedChat.reply.sender.name} boxSize="40px" borderRadius="full" />
                    </HStack>

                </VStack>
            ) : (
                <div style={{ color: 'white' }}>Please select a chat</div>
            )}
            {selectedChat && (
                <Flex p="4" borderTop="1px" borderColor="gray.300" alignItems='center'>
                    <Input placeholder="Message" flex="1" mr="2" border='none' background='#2f2f2f' color='white' borderRadius={50} display='flex' ></Input>
                    <Button background='#d7998c' borderRadius='50%' >
                        <IoIosSend w='40px' h='40px' fontSize={15} />
                    </Button>
                </Flex>
            )
            }
        </Box >
    );
};


export default ChatWindow;