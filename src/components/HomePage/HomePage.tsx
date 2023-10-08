import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { RiGlobalLine } from 'react-icons/ri';
const HomePage:React.FC = () => {
    const router = useRouter();

    return (
        <Flex direction='column' w='100%' h='1640px' px={5}>
            <Flex w='100%' h='620px' mt='900px' py={10}>
                <Flex direction='column' w='55%' h='540px' p={5} bg='linear-gradient(51deg, rgba(255, 255, 255, 0.7) 62.68%, rgba(164, 226, 240, 0.7) 82.67%, rgba(164, 190, 240, 0.7) 93.67%)' border='1.5px solid #C2C2C2' borderBottom='2.5px solid #c2c2c2' borderRadius={15} shadow='md' _hover={{cursor: 'pointer'}} data-group onClick={() => router.push('/explore')}>
                    <Flex>
                        <Flex align='center' justify='center' h='36px' mt={4} px={4} border='1.5px solid #c2c2c2' borderRadius={20}>
                            <RiGlobalLine color='#7F7F7F' />
                            <Text color='#7F7F7F' fontFamily='SFPROB1' fontSize='15px' letterSpacing='0.9' >&nbsp;MOST POPULAR</Text>
                        </Flex>
                        <Image pos='relative' w='100px' ml='auto' _groupHover={{visibility: 'visible'}} visibility='hidden' alt='arrow' src='/arrow.svg' />
                    </Flex>
                    <Text mt='auto' fontFamily='SFPRO' fontSize='48px'>Rationalization Generation</Text>
                </Flex>
                <Flex direction='column' w='45%' h='540spx' ml={4} borderRadius={15}>
                    <Flex direction='column' w='100%' h='50%' p={5} bg='linear-gradient(51deg, rgba(255, 255, 255, 0.7) 62.68%, rgba(240, 232, 164, 0.7) 82.67%, rgba(240, 214, 164, 0.7) 93.67%)' border='1.5px solid #C2C2C2' borderBottom='2.5px solid #c2c2c2' borderRadius={15} shadow='md' _hover={{cursor: 'pointer'}} data-group>
                        <Flex>
                            <Flex align='center' justify='center' h='36px' mt={4} px={4} border='1.5px solid #c2c2c2' borderRadius={20}>
                                <RiGlobalLine color='#7F7F7F' />
                                <Text color='#7F7F7F' fontFamily='SFPROB1' fontSize='15px' letterSpacing='0.9' >&nbsp;NEW</Text>
                            </Flex>
                            <Image pos='relative' w='100px' ml='auto' _groupHover={{visibility: 'visible'}} visibility='hidden' alt='arrow' src='/arrow.svg' />
                        </Flex>
                        
                        <Text mt='auto' fontFamily='SFPRO' fontSize='32px'>Fallacy Identification</Text>
                    </Flex>
                    <Flex direction='column' w='100%' h='50%' mt={4} p={5} bg='linear-gradient(51deg, rgba(255, 255, 255, 0.7) 62.68%, rgba(164, 172, 240, 0.7) 82.67%, rgba(202, 164, 240, 0.7) 93.67%)' border='1.5px solid #C2C2C2' borderBottom='2.5px solid #c2c2c2' borderRadius={15} shadow='md' _hover={{cursor: 'pointer'}} data-group>
                        <Flex>
                            <Flex align='center' justify='center' h='36px' mt={4} px={4} border='1.5px solid #c2c2c2' borderRadius={20}>
                                <RiGlobalLine color='#7F7F7F' />
                                <Text color='#7F7F7F' fontFamily='SFPROB1' fontSize='15px' letterSpacing='0.9' >&nbsp;EXPLORE</Text>
                            </Flex>
                            <Image pos='relative' w='100px' ml='auto' _groupHover={{visibility: 'visible'}} visibility='hidden' alt='arrow' src='/arrow.svg' />
                        </Flex>
                        
                        <Text mt='auto' fontFamily='SFPRO' fontSize='32px'>Resource Aggregation</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};
export default HomePage;