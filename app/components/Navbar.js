import {
    Flex,
    Spacer,
    Button,
    HStack,
    Text,
} from '@chakra-ui/react';

import { FaHome } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";

const NavBar = () => {
    return (
        <Flex p="4" bg="black" color="white" align="center">
            <HStack spacing="4" >
                <Text color="#d7998c" fontWeight="bold" fontSize="large"  >
                    Logo
                </Text>
                <Text w='1px'>|</Text>
                <Text color="#d7998c" fontSize="medium"
                    display='flex'
                    flexDirection='row'
                    alignItems='center'
                    gap={2}
                >
                    <FaHome />
                    Explore
                </Text>
                <Text color="white" fontSize="medium"
                    display='flex'
                    flexDirection='row'
                    alignItems='center'
                    gap={2}
                >
                    <IoCreateOutline />
                    Create
                </Text>
                <Text color="white" fontSize="medium"
                    display='flex'
                    flexDirection='row'
                    alignItems='center'
                    gap={2}
                >
                    <CiEdit />
                    Edit
                </Text>
            </HStack>
            <Spacer />
            <Button px={8} borderRadius={20} background="#de9f92"> Login</Button>
        </Flex >
    );
};

export default NavBar;