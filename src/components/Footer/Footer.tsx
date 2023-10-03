import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';
import { BiBrain } from 'react-icons/bi';
import { useRouter } from 'next/router';
const Footer:React.FC = () => {
    const router = useRouter();

    return (
        <Flex align='center' direction="column" w='100%' minH='400px' bg='white' opacity='100%' borderTop='2px solid #EBEBEB'>
            <Flex justify='center' direction="column" w='100%' maxW='1400px' px={4}>
                <Flex justify='center' direction={['column','column','row','row']} w='100%' mt='40px' px={0}>
                    <Flex direction='column' display={['flex', 'flex', 'none', 'flex']} minW='300px' h='100%' ml={1}  bg='white'>
                        <Flex align='center'>
                            <BiBrain color='black' fontSize='22pt' />
                            <Text mt={-1} ml={1} color='#070E1D' fontFamily='CUTE' fontSize='24pt'>quarrel.fyi</Text>
                        </Flex>
                        <Text mt={4} color='#333' fontFamily='SFPROB1' fontSize='15px'>Copyright © Quarrel.fyi 2023.</Text>
                        <Text mt={0.5} color='#333' fontFamily='SFPROB1' fontSize='15px'>All rights reserved.</Text>
                    </Flex>
                    <Flex justify={['normal', 'normal', 'center', 'center']} direction='row' minW='280px' h='100%' mt={[4,4,0,0]}>
                        <Flex direction='column' ml={[1,1,-10,-10]}>
                            <Text mt={4} color='#0D1835' fontFamily='SFPROBOLD' fontSize='16.5px'>Resources</Text>
                            <Text w='-webkit-fit-content' mt='6px' color='#333' fontFamily='SFPROB1' fontSize='15px' _hover={{cursor: 'pointer', color: '#FB4C40'}}>Explore</Text>
                            <Text w='-webkit-fit-content' mt={1} color='#333' fontFamily='SFPROB1' fontSize='15px' _hover={{cursor: 'pointer', color: '#FB4C40'}}>How it works</Text>
                            <Text w='-webkit-fit-content' mt={1} color='#333' fontFamily='SFPROB1' fontSize='15px' _hover={{cursor: 'pointer', color: '#FB4C40'}}>Debate</Text>
                            <Text w='-webkit-fit-content' mt={1} color='#333' fontFamily='SFPROB1' fontSize='15px' _hover={{cursor: 'pointer', color: '#FB4C40'}}>Learn More</Text>
                            <Text w='-webkit-fit-content' mt={1} color='#333' fontFamily='SFPROB1' fontSize='15px' _hover={{cursor: 'pointer', color: '#FB4C40'}}>Source Code</Text>
                        </Flex>
                        <Flex direction='column' ml={['90px', '170px', '90px', '90px']}>
                            <Text mt={4} color='#0D1835' fontFamily='SFPROBOLD' fontSize='16.5px'>Account</Text>
                            <Text w='-webkit-fit-content' mt='6px' color='#333' fontFamily='SFPROB1' fontSize='15px' _hover={{cursor: 'pointer', color: '#FB4C40'}} onClick={() => router.push('/login')}>Login</Text>
                            <Text w='-webkit-fit-content' mt={1} color='#333' fontFamily='SFPROB1' fontSize='15px' _hover={{cursor: 'pointer', color: '#FB4C40'}} onClick={() => router.push('/signup')}>Get started</Text>

                        </Flex>
                    </Flex>
                    <Flex align='center' direction='column' w={['100%', '100%', '34%','34%']} minW='348px' h='100%' mt={[8,8,0,0]} mb={[10,10,0,0]} ml={[-4,-4,0,0]} p={0}  bg='white'>
                        <Flex direction='column' w='100%' h='100%' ml={8} p={8} bg='#F6F7FB' borderRadius={20}>
                            <Text fontFamily='SFPROB1' fontSize='16px'>Give us feedback</Text>
                            <Text mt={2} fontFamily='SFPRO' fontSize='12.5px'>Help us make quarrel better for everyone.</Text>
                            <Flex align='center' w='100%' h='36px' mt={2} px={2} bg='white' border='1px solid #E2E4E7' borderRadius={5} shadow='sm' _hover={{transform: 'translateY(-1.5px)', cursor: 'pointer', boxShadow: 'md'}} transitionDuration='400ms'>
                                <Text color='#757575' fontFamily='SFPRO' fontSize='14px'>Send us an Email</Text>
                                <Text ml='auto' color='#2755F0' fontFamily='SFPROBOLD' fontSize='14px'>Click Here →</Text>
                            </Flex>
                            <Flex mt={7}>
                                <Flex align='center' _hover={{cursor: 'pointer'}}>
                                    <AiFillGithub fontSize='16px' />
                                    <Text ml={1} fontFamily='SFPROB1' fontSize='16px'>GitHub</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>

                </Flex>
                
            </Flex>
        </Flex>
    );
};
export default Footer;