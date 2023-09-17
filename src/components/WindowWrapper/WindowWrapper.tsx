import React from 'react';
import { Flex } from '@chakra-ui/react';

type Props = {
    children?: React.ReactNode;
    bg?: string;
    cls?: string;
};

const WindowWrapper:React.FC<Props> = ({ children, bg, cls }) => {
    
    return (
        <Flex zIndex={1} align='center' direction="column" w='100%'>  
            <Flex className={cls} w='100%' h='100%'>

            </Flex>
            <Flex justify='center' direction="column" w='100%' maxW='1080px'>
                {children}
            </Flex>
        </Flex>
    );
};
export default WindowWrapper;