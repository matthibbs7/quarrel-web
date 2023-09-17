import React from 'react';
import { Flex } from '@chakra-ui/react';

type Props = {
    children?: React.ReactNode
    bg?: string
};

const WindowWrapper:React.FC<Props> = ({ children, bg }) => {
    
    return (
        <Flex align='center' direction="column" w='100%' bg={bg ?? 'none'}>  
            <Flex justify='center' direction="column" w='100%' maxW='1080px'>
                {children}
            </Flex>
        </Flex>
    );
};
export default WindowWrapper;