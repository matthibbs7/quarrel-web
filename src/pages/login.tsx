import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import WindowWrapper from '@/components/WindowWrapper/WindowWrapper';
export default function Login() {
    return (
        <WindowWrapper cls="noise">
            <Flex className="noise-child"  zIndex={2} w='100%' h='600px'>
                <Flex direction='column' display={['none', 'none', 'flex', 'flex']} w='33.33%' h='100%' pt={40}>
                    <Text ml={5} color='white' fontFamily='SFPROBOLD' fontSize='24pt'>Quarrel</Text>
                    <Text ml={5} color='white' fontFamily='SFPROBOLD' fontSize='24pt'>QUARREL</Text>
                    <Text ml={5} color='white' fontFamily='SFPROBOLD' fontSize='24pt'>Welcome Back.</Text>
                </Flex>
                <Flex zIndex={5} align='center' justify='center' direction='column' w={['100%', '100%', '66.66%', '66.66%']} h='100%' bg='rgba(255, 255, 255, 0.2);' border='1px solid rgba(255, 255, 255, 0.1);' shadow='0 4px 30px rgba(0, 0, 0, 0.1);' backdropFilter='blur(0.4px);'>
                    <Flex w='440px' h='540px' p={7} bg='white' border='1.5px solid #E5E5E3' borderRadius={10} style={{filter: 'none !important;'}}>
                        <Text fontFamily='SFPROB1' fontSize='24pt'>Login</Text>
                    </Flex>
                </Flex>
            </Flex>
            
            {/* <GradientWithoutStore cDistance={24} color1='#ff5005' color2='#dbba95' color3='#d0bce1' /> */}
        
        </WindowWrapper>
    );
}
