import {
    Box,
    Image,
} from '@chakra-ui/react';

const Message = ({ text, sender, image }) => {
    return (
        <Box
            borderRadius="lg"
            p="2"
            my="2"
            maxW="70%"
            bg={sender === 'you' ? '#d7998c' : '#2f2f2f'}
            color={sender === 'you' ? 'black' : 'white'}
            alignSelf={sender === 'you' ? 'flex-end' : 'flex-start'}
            display='flex'
        >
            {image && <Image src={image} alt="Sender" boxSize="30px" borderRadius="full" ml={sender === 'you' ? '2' : '0'} mr={sender === 'you' ? '0' : '2'} />}
            {text}
        </Box>
    );
};


export default Message;