import {
    Flex,
    Spacer,
    Button,
    HStack,
    Text,
} from '@chakra-ui/react';

import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <Flex p="4" marginTop={4} bg="black" color="white" align="center">
            <HStack spacing="4" >
                <Text color="#d7998c" fontWeight="bold" fontSize="large"  >
                    Logo
                </Text>
            </HStack>
            <Spacer />
            <HStack spacing="2">
                <Text color="#d7998c" fontWeight="bold" fontSize="small"  >
                    Contact@00000.tech
                </Text>
                <Text color="#d7998c" fontWeight="bold" fontSize="small"  >
                    <FaTelegram />
                </Text>
                <Text color="#d7998c" fontWeight="bold" fontSize="small"  >
                    <FaXTwitter />
                </Text>
                <Text color="#d7998c" fontWeight="bold" fontSize="small"  >
                    <FaInstagramSquare />
                </Text>
            </HStack>
        </Flex >
    );
};

export default Footer;