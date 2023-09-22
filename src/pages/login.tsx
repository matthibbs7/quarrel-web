import React from 'react';
import { Button, Divider, Flex, Input, Text } from '@chakra-ui/react';
import WindowWrapper from '@/components/WindowWrapper/WindowWrapper';
import { useRouter } from 'next/router';
export default function Login() {
    const router = useRouter();
    return (
        <WindowWrapper cls="noise">
            <Flex className="noise-child"  zIndex={2} w='100%' h='600px'>
                <Flex direction='column' display={['none', 'none', 'flex', 'flex']} w='33.33%' h='100%' pt={40}>
                    <Text ml={5} color='white' fontFamily='SFPROBOLD' fontSize='24pt' fontStyle='italic'>QUARREL.</Text>
                    <Text ml={5} color='white' fontFamily='SFPROBOLD' fontSize='24pt' fontStyle='italic'>QUARREL.</Text>
                    <Text ml={5} color='white' fontFamily='SFPROBOLD' fontSize='24pt' fontStyle='italic'>QUARREL.</Text>
                </Flex>
                <Flex zIndex={5} align='center' justify='center' direction='column' w={['100%', '100%', '66.66%', '66.66%']} h='100%' bg='rgba(255, 255, 255, 0.2);' border='1px solid rgba(255, 255, 255, 0.1);' shadow='0 4px 30px rgba(0, 0, 0, 0.1);' backdropFilter='blur(0.4px);'>
                    <Flex direction='column' w={['368px', '440px']} h='540px' border='1.5px solid #F7F8F9' borderRadius={10} shadow='md' style={{filter: 'none !important;'}}>
                        <Flex direction='column' p={7} bg='#FEFEFF' borderBottom='1px solid clear' borderTopRadius={5}>
                            <Text mt={-2} color='#0D1835' fontFamily='SFPROB1' fontSize='24pt'>Login</Text>
                            <Text as='span' mb={-3} color='#0D1835' fontFamily='SFPROB1' fontSize='14px'>Don{'\''}t have an account?&nbsp;<Text as='span' textDecoration='underline' _hover={{cursor: 'pointer'}} onClick={() => router.push('/signup')}>Create one →</Text></Text>
                        </Flex>
                        <Flex w='100%' h='0.5px' bg='none'>Test</Flex>
                        <Flex direction='column' mt={0} p={7} bg='#FEFEFF' borderBottomRadius={5}>
                            <Text mb={1} fontFamily='SFPROB1' fontSize='16px'>Email</Text>
                            {/* <Input fontSize='14.5px' bg='#F5F5F3' border='1px solid #F5F5F5' borderRadius={4} _placeholder={{color: '#757575'}} placeholder='Enter your email' /> */}
                            <Input mt={0.5} color='#1b2642' fontFamily='SFPRO' fontSize='16.5px' bg='white' border='1px solid #CCCCCC' borderRadius={7} shadow='none' _hover={{border: '1px solid #6785F5'}} _active={{border: '1px solid #6785F5'}} _focus={{border: '1px solid #6785F5', boxShadow: 'none'}} _placeholder={{color: '#acacac'}} placeholder="" type='email' />
                            <Text mt={3} mb={1} fontFamily='SFPROB1' fontSize='16px'>Password</Text>
                            <Input mt={0.5} mb={2} color='#1b2642' fontFamily='SFPROB1' fontSize='16px' bg='white' border='1px solid #CCCCCC' borderRadius={7} shadow='none' _hover={{border: '1px solid #6785F5'}} _active={{border: '1px solid #6785F5'}} _focus={{border: '1px solid #6785F5', boxShadow: 'none'}} _placeholder={{color: '#acacac'}} placeholder="" type='password' />
                            <Text mb={4} ml='auto' color='#2755F0' fontFamily='SFPROB1' fontSize='14px' _hover={{cursor: 'pointer'}} onClick={() => router.push('/reset-password')}>Forgot password?</Text>
                            <Button mt={0.5} color='white' fontFamily='SFPROB1' fontSize='15px' bg='radial-gradient(circle, rgba(252,115,105,1) 0%, rgba(250,77,64,1) 74%);' border='1px solid #FB453A' _hover={{bg: 'radial-gradient(circle, rgba(252,115,105,1) 0%, rgba(250,77,64,1) 74%);'}}>Continue</Button>
                        
                            <Flex align='center' mt={5}>
                                <Divider borderColor='#CCCCCC' />
                                <Text color='#ccc' fontSize='12px'>&nbsp;&nbsp;or&nbsp;&nbsp;</Text>
                                <Divider borderColor='#CCCCCC' />
                            </Flex>
                            <Button mt={5} color='#0D1835' fontFamily='SFPRO' fontSize='15px' bg='#FEFEFF' border='1px solid #ccc' shadow='md' _hover={{bg: '#F9F9FA'}}>Sign in with Google →</Button>
                            {/* <Button mb={8} color='white' fontFamily='SFPROB1' fontSize='15px' bg='radial-gradient(circle, rgba(252,55,46,1) 0%, rgba(250,140,119,1) 100%)' border='1px solid #FB453A'>Sign in with GitHub →</Button> */}
                            <Text mt={4} mr='auto' mb={1.5} ml='auto' color='#6D6D6F' fontFamily='SFPROB1' fontSize='11px'>By continuing you agree to our Privacy Policy and Terms of Service.</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            
            {/* <GradientWithoutStore cDistance={24} color1='#ff5005' color2='#dbba95' color3='#d0bce1' /> */}
        
        </WindowWrapper>
    );
}
