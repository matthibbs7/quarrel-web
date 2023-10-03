import React, { useState } from 'react';
import { Button, Divider, Flex, Input, Text } from '@chakra-ui/react';
import WindowWrapper from '@/components/WindowWrapper/WindowWrapper';
import { useRouter } from 'next/router';
import { BiError } from 'react-icons/bi';
export default function SignUp() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const onSubmit = () => {
        setError('');
        if (email === '' || password === '' || confirmPassword === '') {
            setError('Please fill out all fields');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        console.log(email, password);
    };

    return (
        <WindowWrapper cls="noise2">
            <Flex className="noise2-child"  zIndex={2} w='100%' h='600px'>
                
                <Flex zIndex={5} align='center' justify='center' direction='column' w={['100%', '100%', '66.66%', '66.66%']} h='100%' bg='rgba(255, 255, 255, 0.2);' border='1px solid rgba(255, 255, 255, 0.1);' shadow='0 4px 30px rgba(0, 0, 0, 0.1);' backdropFilter='blur(0.4px);'>
                    <Flex direction='column' w={['368px', '440px']} h='540px' border='1.5px solid #F7F8F9' borderRadius={10} shadow='md' style={{filter: 'none !important;'}}>
                        <Flex direction='column' p={7} bg='#FEFEFF' borderBottom='1px solid clear' borderTopRadius={5}>
                            <Text mt={-2} color='#0D1835' fontFamily='SFPROB1' fontSize='24pt'>Get Started</Text>
                            <Text as='span' mb={-3} color='#0D1835' fontFamily='SFPROB1' fontSize='14px'>Already have an account?&nbsp;<Text as='span' textDecoration='underline' _hover={{cursor: 'pointer', background: 'radial-gradient(circle, rgba(46,127,252,1) 0%, rgba(54,180,251,1) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} onClick={() => router.push('/login')}>Sign in →</Text></Text>
                        </Flex>
                        <Flex w='100%' h='2px' bg='none' />
                        <Flex direction='column' mt={0} p={7} pt={0} bg='#FEFEFF' borderBottomRadius={5}>
                            <Text mt={2} mb={1} fontFamily='SFPROB1' fontSize='16px'>Email *</Text>
                            {/* <Input fontSize='14.5px' bg='#F5F5F3' border='1px solid #F5F5F5' borderRadius={4} _placeholder={{color: '#757575'}} placeholder='Enter your email' /> */}
                            <Input mt={0.5} color='#1b2642' fontFamily='SFPRO' fontSize='16.5px' bg='white' border='1px solid #CCCCCC' borderRadius={7} shadow='none' _hover={{border: '1px solid #6785F5'}} _active={{border: '1px solid #6785F5'}} _focus={{border: '1px solid #6785F5', boxShadow: 'none'}} _placeholder={{color: '#acacac'}} onChange={(e) => setEmail(e.target.value)} placeholder="" type='email' value={email} />
                            <Text mt={2} mb={1} fontFamily='SFPROB1' fontSize='16px'>Password *</Text>
                            <Input mt={0.5} mb={1} color='#1b2642' fontFamily='SFPROB1' fontSize='16px' bg='white' border='1px solid #CCCCCC' borderRadius={7} shadow='none' _hover={{border: '1px solid #6785F5'}} _active={{border: '1px solid #6785F5'}} _focus={{border: '1px solid #6785F5', boxShadow: 'none'}} _placeholder={{color: '#acacac'}} onChange={(e) => setPassword(e.target.value)} placeholder="" type='password' value={password} />
                            <Text mt={2} mb={1} fontFamily='SFPROB1' fontSize='16px'>Confirm Password *</Text>
                            <Input mt={0.5} mb={[4,6,6,6]} color='#1b2642' fontFamily='SFPROB1' fontSize='16px' bg='white' border='1px solid #CCCCCC' borderRadius={7} shadow='none' _hover={{border: '1px solid #6785F5'}} _active={{border: '1px solid #6785F5'}} _focus={{border: '1px solid #6785F5', boxShadow: 'none'}} _placeholder={{color: '#acacac'}} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="" type='password' value={confirmPassword} />
                            {/* <Text mb={4} ml='auto' color='#2755F0' fontFamily='SFPROB1' fontSize='14px' _hover={{cursor: 'pointer'}} onClick={() => router.push('/reset-password')}>Forgot password?</Text> */}
                            <Button mt={0.5} color='white' fontFamily='SFPROB1' fontSize='15px' bg='radial-gradient(circle, rgba(46,127,252,1) 0%, rgba(54,180,251,1) 100%)' opacity='0.9' border='1px solid #98BAFD' _hover={{opacity: '0.8', bg: 'radial-gradient(circle, rgba(46,127,252,1) 0%, rgba(54,180,251,1) 100%)'}} onClick={() => onSubmit()}>Continue</Button>
                            {error && 
                                <Flex align='center'>
                                    <Text as='span' mt={1} mb={-6} color='red.400'><BiError fontSize='15px' /></Text>
                                    <Text as='span' mt={1} mb={-6} color='red.400' fontFamily='SFPROB1' fontSize='10pt'>&nbsp;{error}</Text>
                                </Flex>
                            }
                            <Flex align='center' mt={4}>
                                <Divider borderColor='#CCCCCC' />
                                <Text color='#ccc' fontSize='12px'>&nbsp;&nbsp;or&nbsp;&nbsp;</Text>
                                <Divider borderColor='#CCCCCC' />
                            </Flex>
                            <Button mt={3} color='#0D1835' fontFamily='SFPRO' fontSize='15px' bg='#FEFEFF' border='1px solid #ccc' shadow='md' _hover={{bg: '#F9F9FA'}}>Create account with Google →</Button>
                            {/* <Button mb={8} color='white' fontFamily='SFPROB1' fontSize='15px' bg='radial-gradient(circle, rgba(252,55,46,1) 0%, rgba(250,140,119,1) 100%)' border='1px solid #FB453A'>Sign in with GitHub →</Button> */}
                            <Text mt={[2,3,3,3]} mr='auto' mb={['-21px',-4,-4,-4]} ml='auto' color='#6D6D6F' fontFamily='SFPROB1' fontSize='11px' textAlign='center'>By continuing you agree to our Privacy Policy and Terms of Service.</Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex direction='column' display={['none', 'none', 'flex', 'flex']} w='33.33%' h='100%' pt={40}>
                    <Text mr={10} ml='auto' color='white' fontFamily='SFPROBOLD' fontSize='24pt' fontStyle='italic'>QUARREL</Text>
                    <Text mr={10} ml='auto' color='white' fontFamily='SFPROBOLD' fontSize='24pt' fontStyle='italic'>QUARREL</Text>
                    <Text mr={10} ml='auto' color='white' fontFamily='SFPROBOLD' fontSize='24pt' fontStyle='italic'>QUARREL</Text>
                    
                </Flex>
            </Flex>
            
            {/* <GradientWithoutStore cDistance={24} color1='#ff5005' color2='#dbba95' color3='#d0bce1' /> */}
        
        </WindowWrapper>
    );
}
