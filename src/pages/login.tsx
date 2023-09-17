import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import WindowWrapper from '@/components/WindowWrapper/WindowWrapper';
export default function Login() {
    return (
        <WindowWrapper bg='radial-gradient(circle, rgba(252,55,46,1) 0%, rgba(250,140,119,1) 100%)'>
            <Flex w='100%' h='600px'>
                <Flex direction='column' w='33.33%' h='100%' pt={40}>
                    <Text color='white' fontFamily='SFPROB1'>Welcome Back</Text>
                </Flex>
                <Flex direction='column' w='66.66%' h='100%' bg='white'>

                </Flex>
            </Flex>
            
            {/* <GradientWithoutStore cDistance={24} color1='#ff5005' color2='#dbba95' color3='#d0bce1' /> */}
        
        </WindowWrapper>
    );
}
