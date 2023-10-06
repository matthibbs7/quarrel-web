import React from 'react';
import { Flex } from '@chakra-ui/react';
import WindowWrapper from '@/components/WindowWrapper/WindowWrapper';
import { useRouter } from 'next/router';

export default function Explore() {
    const router = useRouter();

    return (
        <WindowWrapper cls="exploreBg">
            <Flex className="noise-child"  zIndex={2} w='100%' h='600px'>
                
            </Flex>
        </WindowWrapper>
    );
}
