import React from 'react';
import { Flex } from '@chakra-ui/react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

type Props = {
    children?: React.ReactNode
};

const Layout:React.FC<Props> = ({ children }) => {
    
    return (
        <Flex align='center' direction="column" w='100%' h='100%'>  
            
            <Navbar />
            <main style={{width: '100%', height: '100%'}}>{children}</main>
            <Flex w='100%' mt='auto'>
                <Footer />
            </Flex>
        </Flex>
    );
};
export default Layout;