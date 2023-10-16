import React from 'react';
import { Button, Text, Flex, Menu, MenuButton, MenuItem, MenuList, Divider } from '@chakra-ui/react';
import { HiMenu } from 'react-icons/hi';
import { useRouter } from 'next/router';
import { FiLogIn } from 'react-icons/fi';
import { IoCreateOutline } from 'react-icons/io5';
const HamburgerMenu:React.FC = () => {
    const router = useRouter();

    return (
        <Flex align="center" w='100%' h="100%" >  
            <Menu>
                {({ isOpen }) => (
                    <Flex w='100%'>
                        <MenuButton as={Button} justifyContent='center' w='34px' h='34px' p={2} bg='none' _hover={{bg: '#F9F9FA', cursor: 'pointer'}} _active={{bg: '#F9F9FA'}} isActive={isOpen}>
                            <Flex w='100%' h='100%' borderRadius={6}>
                                <HiMenu color='#060F1D' fontSize='18pt' />
                            </Flex>
                        </MenuButton>
                        
                        <MenuList w={'400px'} minW="0" h='300px' mt={8} p={4} bg="white"  border="1.5px solid #F7F8F9" borderRadius={10} shadow='md' motionProps={{
                            transition: {duration: 0.3},
                            initial: {scale: 0.8},
                            exit: {opacity: 0, scale: 0.9},
                            animate: {scale: 1.2}}}>
                            <MenuItem h='40px' borderRadius={10} _hover={{bg: '#F9F9FA'}} onClick={() => router.push('/login')}>
                                <Flex align='center' h='100%'>
                                    <Text as='span' fontFamily='SFPROB1' fontSize='16px'>Login&nbsp;</Text>
                                    <Text as='span' fontFamily='SFPROB1' fontSize='16px'><FiLogIn /></Text>
                                </Flex>
                            </MenuItem>
                            <MenuItem h='40px' borderRadius={10} _hover={{bg: '#F9F9FA'}} onClick={() => router.push('/signup')}>
                                <Text fontFamily='SFPROB1' fontSize='16px'>Sign Up&nbsp;</Text>
                                <Text as='span' fontFamily='SFPROB1' fontSize='16px'><IoCreateOutline /></Text>
                            </MenuItem>
                            <Divider mt={3} mb={3} borderColor='#E0E0E0' />
                            <MenuItem h='40px' borderRadius={10} _hover={{bg: '#F9F9FA'}} onClick={() => router.push('/signup')}>
                                <Text fontFamily='SFPROB1' fontSize='16px'>Explore</Text>
                            </MenuItem>
                            <MenuItem h='40px' borderRadius={10} _hover={{bg: '#F9F9FA'}} onClick={() => router.push('/login')}>
                                <Text fontFamily='SFPROB1' fontSize='16px'>More</Text>
                            </MenuItem>
                        </MenuList>
                        
                    </Flex>
                )}
            </Menu>
        </Flex>
    );
};
export default HamburgerMenu;