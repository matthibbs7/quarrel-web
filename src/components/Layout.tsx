import React from 'react';
import { Flex } from '@chakra-ui/react';

type Props = {
    children?: React.ReactNode
};

const Layout:React.FC<Props> = ({ children }) => {
    
    return (
        <Flex direction="column">  
            {/* <Navbar /> */}
            <main>{children}</main>
        </Flex>
    );
};
export default Layout;