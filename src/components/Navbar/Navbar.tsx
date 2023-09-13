import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
const Navbar:React.FC = () => {
    
    return (
        <Flex align='center' direction="column" w='100%' h='64px' bg='white' opacity='100%' shadow='md'>
            <Flex justify='center' direction="column" w='100%' maxW='1080px' h='64px' px={4} bg='white'>
                <Flex align='center'>
                    {/* <Flex align='center' justify='center' w='28px' h='28px' bg='black' borderRadius={4}>
                        <GiTomato color='white' fontSize='16pt' style={{border: '0px solid black', borderRadius: '5px'}} />
                    </Flex> */}
                    {/* <GiTomato fontSize='20pt' style={{border: '0px solid black', borderRadius: '5px'}} /> */}
                    <Text ml={2} color='#070E1D' fontFamily='CUTE' fontSize='24pt'>quarrel.fyi</Text>
                    <Flex display={['none', 'none', 'flex', 'flex']} mr='auto' ml='auto'>
                        <Flex align='center' justify='center' h='30px' px={2} borderRadius={4} _hover={{cursor: 'pointer', bg: '#F9F9FA'}}>
                            <Text color='#070E1D' fontFamily='SFPROB1' fontSize='14px'>Explore</Text>
                        </Flex>
                        <Flex align='center' justify='center' h='30px' ml={4} px={2} borderRadius={4} _hover={{cursor: 'pointer', bg: '#F9F9FA'}}>
                            <Text color='#070E1D' fontFamily='SFPROB1' fontSize='14px'>How it works</Text>
                        </Flex>
                        <Flex align='center' justify='center' h='30px' ml={4} px={2} borderRadius={4} _hover={{cursor: 'pointer', bg: '#F9F9FA'}}>
                            <Text color='#070E1D' fontFamily='SFPROB1' fontSize='14px'>Debate</Text>
                        </Flex>
                        
                        <Flex align='center' justify='center' h='30px' ml={4} px={2} borderRadius={4} _hover={{cursor: 'pointer', bg: '#F9F9FA'}}>
                            <Text color='#070E1D' fontFamily='SFPROB1' fontSize='14px'>Learn More</Text>
                        </Flex>
                        
                    </Flex>
                    <Flex align='center' justify='center' w='64px' h='32px' px={3} bg='white' border='1px solid #A6A9B3' borderRadius={7} _hover={{cursor: 'pointer', bg: '#F9F9FA'}}>
                        <Text fontFamily='SFPROB1' fontSize='14px'>Login</Text>
                    </Flex>
                    <Flex align='center' justify='center' w='110px' h='32px' ml='2' px={3} bg='radial-gradient(circle, rgba(252,55,46,1) 0%, rgba(250,140,119,1) 100%)' borderRadius={7} _hover={{cursor: 'pointer', bg: 'radial-gradient(circle, rgba(46,127,252,1) 0%, rgba(54,180,251,1) 100%)'}}>
                        <Text color='white' fontFamily='SFPROB1' fontSize='14px'>Get started →</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};
export default Navbar;