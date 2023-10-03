import React from 'react';
import { Button, Text, Flex, Menu, MenuButton, MenuList, Input, Box } from '@chakra-ui/react';
import { GiEarthAmerica } from 'react-icons/gi';
import { BsCaretDownFill } from 'react-icons/bs';
import { HiMenu } from 'react-icons/hi';

const HamburgerMenu:React.FC = () => {

    return (
        <Flex align="center" w='100%' h="100%" >  
            <Menu>
                {({ isOpen }) => (
                    <>
                        <MenuButton as={Button} justifyContent='center' w='34px' h='34px' p={2} bg='none' _hover={{bg: '#F9F9FA', cursor: 'pointer'}} _active={{bg: '#F9F9FA'}} isActive={isOpen}>
                            <Flex w='100%' h='100%' borderRadius={6}>
                                <HiMenu color='#060F1D' fontSize='18pt' />
                            </Flex>
                        </MenuButton>
                        
                        <MenuList w="370px" minW="0" h='300px' mt={8} p={4}  bg="#121212" border="1px solid #343434" borderRadius='3px' motionProps={{
                            transition: {duration: 0.3},
                            initial: {scale: 0.8},
                            exit: {opacity: 0, scale: 0.9},
                            animate: {scale: 1.2}}}>
                            <Flex w='100%'>
                                <Flex align='center' justify='center' w='34px' h='34px' bg='#343434' borderRadius={2.5}>
                                    <GiEarthAmerica fontSize='14pt' color='#E6E6E6' />
                                </Flex>
                                <Flex align='center' ml={3} color="#383838" fontSize='13px' _hover={{cursor: 'not-allowed'}}>
                                    <Text mr={1} fontWeight={500}>Public</Text>
                                    <BsCaretDownFill fontSize='10.5px' />
                                    
                                </Flex>
                                <Text mt={2} ml='auto' color='#999999' fontSize='13px'>Everyone can view</Text>
                            </Flex>
                            <Flex align='center' direction='row' mt={3}>
                                <Text color='#999' fontSize='13px'>Changing dashboard access is available with&nbsp;</Text>
                                <Text color='white' fontSize='13px' _hover={{cursor: 'pointer'}}>Rollsolid Pro</Text>
                            </Flex>
                            {/* <Text mt={3} mb={3} ml={5} fontSize="8pt" fontFamily="AvenirNext-Regular" color="#454545">© 2023 Rollsolid Inc. All rights reserved</Text> */}
                            <Flex align='center' mt={4}>
                                <Input w='85%' h='28px' pl={2} fontSize='13px' bg='#343434' border='none' borderRadius={2.5} shadow='none' _active={{border: 'none'}} _focus={{border: 'none', boxShadow: 'none'}} _placeholder={{color: '#999999'}} placeholder='Enter username or email' />
                                
                                <Button w='54px' h='28px' ml={3} p={1} px={0} color='black' fontSize='13px' bg='#A99BFC' borderRadius={3}>
                                    Send
                                </Button>
                            </Flex>
                            <Box w='109%' mt={5} ml={-4} borderTop='1px solid #343434'></Box>
                            <Flex direction='column' overflowX='scroll' w='100%' h='100px'>
                                <Flex align='center' w='100%' mt={3.5}>
                                    
                                    <Text ml={2} fontSize='13px'></Text>
                                    <Text ml='auto' color='#999999' fontSize='13px'>Owner</Text>
                                </Flex>
                                
                            </Flex>
                            <Box w='109%' ml={-4} borderTop='1px solid #343434'></Box>
                            <Flex w='100%' mt={3}>
                                <Button w='74px' h='26px' ml='auto' p={0} fontSize='12.5px' bg='#343434' borderRadius={2.5} >Copy link</Button>
                            </Flex>
                        </MenuList>
                        
                    </>
                )}
            </Menu>
        </Flex>
    );
};
export default HamburgerMenu;