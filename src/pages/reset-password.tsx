import React, { useState } from 'react';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import WindowWrapper from '@/components/WindowWrapper/WindowWrapper';
import { useRouter } from 'next/router';
import { BiError } from 'react-icons/bi';
import { useAuthState, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/clientApp';

enum ViewState {
    DEFAULT = 'DEFAULT',
    SENT = 'SENT'
}

export default function ResetPassword() {
    const router = useRouter();
    const [error2, setError2] = useState('');

    const [
        sendPasswordResetEmail,
        loading,
        error,
    ] = useSendPasswordResetEmail(auth);

    const [
        userAuth,
        authLoading,
    ] = useAuthState(auth);

    const [email, setEmail] = useState('');
    const [confirmText, setConfirmText] = useState('Confirm');
    const [viewState, setViewState] = useState<ViewState>(ViewState.DEFAULT);

    const onSubmit = () => {
        setError2('');
        if (email === '') {
            setError2('Please enter an email');
            return;
        }
        sendPasswordResetEmail(email);
        if (error) {
            return;
        }
        setViewState(ViewState.SENT);
    };

    return (
        <WindowWrapper cls="noise">
            <Flex className="noise-child"  zIndex={2} w='100%' h='600px'>
                <Flex direction='column' display={['none', 'none', 'flex', 'flex']} w='33.33%' h='100%' pt={40}>
                    <Text ml={5} color='white' fontFamily='SFPROBOLD' fontSize='24pt' fontStyle='italic'>QUARREL</Text>
                    <Text ml={5} color='white' fontFamily='SFPROBOLD' fontSize='24pt' fontStyle='italic'>QUARREL</Text>
                    <Text ml={5} color='white' fontFamily='SFPROBOLD' fontSize='24pt' fontStyle='italic'>QUARREL</Text>
                    
                </Flex>
                <Flex zIndex={5} align='center' justify='center' direction='column' w={['100%', '100%', '66.66%', '66.66%']} h='100%' bg='rgba(255, 255, 255, 0.2);' border='1px solid rgba(255, 255, 255, 0.1);' shadow='0 4px 30px rgba(0, 0, 0, 0.1);' backdropFilter='blur(0.4px);'>
                    <Flex direction='column' w={['368px', '440px']} h={['355px','336px', '336px', '336px']} border='1.5px solid #F7F8F9' borderRadius={10} shadow='md' style={{filter: 'none !important;'}}>
                        <Flex direction='column' p={7} bg='#FEFEFF' borderBottom='1px solid clear' borderTopRadius={5}>
                            <Text mt={-2} color='#0D1835' fontFamily='SFPROB1' fontSize='24pt'>Reset Password</Text>
                            <Text as='span' mb={-3} color='#0D1835' fontFamily='SFPROB1' fontSize='14px'>Back to&nbsp;<Text as='span' textDecoration='underline' _hover={{cursor: 'pointer', background: 'radial-gradient(circle, rgba(46,127,252,1) 0%, rgba(54,180,251,1) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} onClick={() => router.push('/login')}>Login →</Text></Text>
                        </Flex>
                        <Flex w='100%' h='2px' bg='none'>Test</Flex>
                        <Flex direction='column' mt={0} p={7} bg='#FEFEFF' borderBottomRadius={5}>
                            {viewState === ViewState.DEFAULT ? (
                                <>
                                    <Text mb={1} fontFamily='SFPROB1' fontSize='16px'>Email</Text>
                                    
                                    {/* <Input fontSize='14.5px' bg='#F5F5F3' border='1px solid #F5F5F5' borderRadius={4} _placeholder={{color: '#757575'}} placeholder='Enter your email' /> */}
                                    <Input mt={0.5} color='#1b2642' fontFamily='SFPRO' fontSize='16.5px' bg='white' border='1px solid #CCCCCC' borderRadius={7} shadow='none' _hover={{border: '1px solid #6785F5'}} _active={{border: '1px solid #6785F5'}} _focus={{border: '1px solid #6785F5', boxShadow: 'none'}} _placeholder={{color: '#acacac'}} onChange={(e) => setEmail(e.target.value)} placeholder="" type='email' value={email} />
                                    <Text mt={1} mb={5} color='#6D6D6F' fontFamily='SFPROB1' fontSize='12.5px'>Enter your account email above to receive password reset instructions</Text>
                                    
                                    <Button mt={0.5} mb={4} color='white' fontFamily='SFPROB1' fontSize='15px' bg='radial-gradient(circle, rgba(46,127,252,1) 0%, rgba(54,180,251,1) 100%)' opacity='0.9' border='1px solid #98BAFD' _hover={{opacity: '0.8', bg: 'radial-gradient(circle, rgba(46,127,252,1) 0%, rgba(54,180,251,1) 100%)'}} isLoading={loading} onClick={() => onSubmit()}>{confirmText}</Button>
                                    {(error || error2) && 
                                        <Flex align='center'>
                                            <Text as='span' mt={1} mb={-6} color='red.400'><BiError fontSize='15px' /></Text>
                                            <Text as='span' mt={1} mb={-6} color='red.400' fontFamily='SFPROB1' fontSize='10pt'>&nbsp;{error ? error.message : error2}</Text>
                                        </Flex>
                                    }
                                </>
                            ): (
                                <Flex h={['190px','170px','170px','170px']}>
                                    <Text>An Email with password reset instructions has been sent!</Text>
                                </Flex>
                            )}
                            
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </WindowWrapper>
    );
}
