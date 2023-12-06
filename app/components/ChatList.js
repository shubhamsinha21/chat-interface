
import {
    Box,
    Button,
    VStack,
    HStack,
    Image,
    Text
} from '@chakra-ui/react';
import { IoIosChatbubbles } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";

const ChatList = ({ chats, onSelectChat, isChatWindowVisible }) => {
    return (
        <VStack
            p="4"
            bg="#181818"
            borderRight="1px"
            align="start"
            display={{ base: isChatWindowVisible ? 'none' : 'flex', md: 'flex' }}
            w='sm'
            marginTop={4}
            borderRadius={10}
            h="4xl"
        >
            <Text color='#a0a0a0' letterSpacing={1} >ALL YOUR CHATS</Text>
            <Button textAlign='center' gap={1} color='black' background='#d7998c' w='100%' >
                <IoIosChatbubbles />
                Chat Images: ON
            </Button>
            <Text color='#a0a0a0' fontSize={14} > When a bot sends you images, you will be charged one secondary image</Text>
            {
                chats.map((chat) => (
                    <Button key={chat.id} onClick={() => onSelectChat(chat)}
                        display='flex' flexDirection='column' borderRadius={20} w='100%' alignItems='flex-start'
                        bg='black'
                        _hover={{ bg: '#2f2f2f' }} py={6} my={1}
                    >
                        <HStack spacing="3" >
                            <Image src={chat.sender.image} alt={chat.sender.name} boxSize="35px" borderRadius="full" />
                            <Box color='white' display='flex' flexDirection='column' alignItems='flex-start'>
                                {chat.sender.name}
                                <Text fontSize={12} color='#a0a0a0' > {chat.sender.title}</Text>
                            </Box>
                        </HStack>
                    </Button>
                ))
            }
            <Box
                w="80%"
                alignSelf='center'
                h="1px"
                bg="gray.300" // You can customize the color as per your design
            />
            <Text color='#a0a0a0' letterSpacing={1} display='flex' flexDirection='row' gap={2} alignItems='center'>
                <Text background='#d7998c' borderRadius='50%' fontSize={22} my={2}>
                    <IoMdAdd color='black' />
                </Text>
                Create New Bot
            </Text>
        </VStack >
    );
};

export default ChatList;