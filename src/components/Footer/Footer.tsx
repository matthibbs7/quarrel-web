import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
const Footer:React.FC = () => {
    
    return (
        <Flex align='center' direction="column" w='100%' h='400px' bg='white' opacity='100%' borderTop='1px solid #EBEBEB'>
            <Flex justify='center' direction="column" w='100%' maxW='1080px' h='100%' px={4}>
                <Flex direction={['column','column','row','row']} w='100%' h='300px' mt='34px' px={0}>
                    <Flex direction='column' display={['none', 'flex', 'flex', 'flex']} w='34%' h='100%' ml={1}  bg='white'>
                        <Text color='#070E1D' fontFamily='CUTE' fontSize='24pt'>quarrel.fyi</Text>
                        <Text mt={4} color='#333' fontFamily='SFPROB1' fontSize='15px'>Copyright © Quarrel.fyi 2023.</Text>
                        <Text mt={0.5} color='#333' fontFamily='SFPROB1' fontSize='15px'>All rights reserved.</Text>
                    </Flex>
                    <Flex justify='center' direction='row' w='34%' minW='320px' h='100%'>
                        <Flex direction='column'>
                            <Text mt={4} color='#0D1835' fontFamily='SFPROBOLD' fontSize='16.5px'>Resources</Text>
                            <Text w='-webkit-fit-content' mt='6px' color='#333' fontFamily='SFPROB1' fontSize='15px' _hover={{cursor: 'pointer', color: '#FB4C40'}}>Explore</Text>
                            <Text w='-webkit-fit-content' mt={1} color='#333' fontFamily='SFPROB1' fontSize='15px' _hover={{cursor: 'pointer', color: '#FB4C40'}}>How it works</Text>
                            <Text w='-webkit-fit-content' mt={1} color='#333' fontFamily='SFPROB1' fontSize='15px' _hover={{cursor: 'pointer', color: '#FB4C40'}}>Debate</Text>
                            <Text w='-webkit-fit-content' mt={1} color='#333' fontFamily='SFPROB1' fontSize='15px' _hover={{cursor: 'pointer', color: '#FB4C40'}}>Learn More</Text>
                            <Text w='-webkit-fit-content' mt={1} color='#333' fontFamily='SFPROB1' fontSize='15px' _hover={{cursor: 'pointer', color: '#FB4C40'}}>Source Code</Text>
                        </Flex>
                        <Flex direction='column' ml='90px'>
                            <Text mt={4} color='#0D1835' fontFamily='SFPROBOLD' fontSize='16.5px'>Account</Text>
                            <Text w='-webkit-fit-content' mt='6px' color='#333' fontFamily='SFPROB1' fontSize='15px' _hover={{cursor: 'pointer', color: '#FB4C40'}}>Login</Text>
                            <Text w='-webkit-fit-content' mt={1} color='#333' fontFamily='SFPROB1' fontSize='15px' _hover={{cursor: 'pointer', color: '#FB4C40'}}>Get started</Text>

                        </Flex>
                    </Flex>
                    <Flex align='center' direction='column' display={['none', 'flex', 'flex', 'flex']} w='34%' h='100%' p={5}  bg='white'>
                        <Flex direction='column' w='100%' h='100%' ml={8} bg='#F6F7FB' borderRadius={20}>
                            <Text>Give us feedback</Text>
                            <Text fontSize='12px'>Have a recommendation to make the site better?</Text>
                        </Flex>
                    </Flex>

                </Flex>
                
            </Flex>
        </Flex>
    );
};
export default Footer;