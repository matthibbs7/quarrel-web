import React from 'react';
import { Flex, Input, Text } from '@chakra-ui/react';
import WindowWrapper from '@/components/WindowWrapper/WindowWrapper';
import { useRouter } from 'next/router';
import modalbg from '../modalbg.svg';
import Head from 'next/head';
import { BiSearchAlt } from 'react-icons/bi';
import { LuDices } from 'react-icons/lu';

export default function Explore() {
    const router = useRouter();

    return (
        <div>
            <Head>
                <title>Explore | Quarrel.fyi</title>
            </Head>
            <WindowWrapper cls="exploreBg">
                <Flex className="noise-child" zIndex={2} direction='column'  w='100%' h='600px' mt={['-60px','-60px',0,0]}>
                    <Flex direction='column' w='100%' pt="110px" pl={6}>
                        <Text color='#2755F0' fontFamily='SFPROB1' fontSize='17px'>Explore</Text>
                        <Text mt={3} color='#0D1835' fontFamily='SFPROB1' fontSize='38px' letterSpacing='-1px'>Rationalization Generator</Text>
                        <Text w='400px' mt={6} color='#3E4351' fontFamily='SFPROB1' fontSize='17px'>Explore and understand for and against arguments for any given topic or domain.</Text>
                    </Flex>
                
                </Flex>
                <Flex align='center' direction='column' minW='0' mx={[0,0,6,6]} mt={['-250px','-250px','-190px', '-190px']} px={6} pt={[10,10,20,20]} bgImage={`url(${modalbg.src})`} bgPosition="center" borderTopRadius={35}>
                    
                    <Flex w='100%' maxW='600px' mb={20}>
                        <Input zIndex={5} maxW='600px' h='54px' bg='white' borderRadius={10} shadow='md' placeholder='What do you want to rationalize?' />
                        <Flex zIndex={6} align='center' justify='center' w='54px' minW='54px' h='54px' ml={3} bg='white' border='2px solid #F7F8F9' borderRadius={10} shadow='md' _hover={{cursor: 'pointer', transform: 'translateY(-1.5px)', }} transition='transform 0.2s'>
                            <BiSearchAlt color='#6D6D6F' fontSize='18pt' />
                        </Flex>
                        <Flex zIndex={6} align='center' justify='center' w='54px' minW='54px' h='54px' ml={3} bg='white' border='2px solid #F7F8F9' borderRadius={10} shadow='md' _hover={{cursor: 'pointer', transform: 'scale(1.05) rotate(-360deg)', }} transition='transform 0.4s'>
                            <LuDices color='#6D6D6F' fontSize='18pt' />
                        </Flex>
                        
                    </Flex>
                </Flex>
            </WindowWrapper>
        </div>
    );
}
