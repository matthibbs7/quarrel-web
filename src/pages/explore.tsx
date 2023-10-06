import React from 'react';
import { Flex, Input, Text } from '@chakra-ui/react';
import WindowWrapper from '@/components/WindowWrapper/WindowWrapper';
import { useRouter } from 'next/router';
import modalbg from '../modalbg.svg';

export default function Explore() {
    const router = useRouter();

    return (
        <WindowWrapper cls="exploreBg">
            <Flex className="noise-child" zIndex={2} direction='column'  w='100%' h='600px' mt={['-60px','-60px',0,0]}>
                <Flex direction='column' w='100%' pt="110px" pl={6}>
                    <Text color='#2755F0' fontFamily='SFPROB1' fontSize='17px'>Explore</Text>
                    <Text mt={3} color='#0D1835' fontFamily='SFPROB1' fontSize='38px' letterSpacing='-1px'>Rationalization Generator</Text>
                    <Text w='400px' mt={6} color='#3E4351' fontFamily='SFPROB1' fontSize='17px'>Explore and understand for and against arguments for any given topic or domain.</Text>
                </Flex>
                
            </Flex>
            <Flex align='center' direction='column' minW='0' h='1000px' mx={6} mt="-190px" px={6} pt={20} bgImage={`url(${modalbg.src})`} bgPosition="center" borderTopRadius={35}>
                <Input zIndex={5} maxW='600px' h='54px' bg='white' borderRadius={10} placeholder='What do you want to rationalize?' />
            </Flex>
        </WindowWrapper>
    );
}
