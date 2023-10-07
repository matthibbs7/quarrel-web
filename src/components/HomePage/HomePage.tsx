import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const HomePage:React.FC = () => {
    const router = useRouter();

    return (
        <Flex direction='column' w='100%' h='100%' px={5}>
            <Flex w='100%' h='100%' py={10}>
                <Flex direction='column' w='55%' h='540px' p={5} bg='linear-gradient(51deg, rgba(255, 255, 255, 1) 62.68%, rgba(164, 226, 240, 1) 82.67%, rgba(164, 190, 240, 1) 93.67%)' border='1.5px solid #C2C2C2' borderRadius={15} _hover={{cursor: 'pointer'}} data-group onClick={() => router.push('/explore')}>
                    <Image pos='relative' w='100px' ml='auto' _groupHover={{visibility: 'visible'}} visibility='hidden' alt='arrow' src='/arrow.svg' />
                    <Text mt='auto' fontSize='48px'>Rationalization Generation</Text>
                </Flex>
                <Flex direction='column' w='45%' h='540spx' ml={4} borderRadius={15}>
                    <Flex direction='column' w='100%' h='50%' p={5} bg='linear-gradient(51deg, rgba(255, 255, 255, 1) 62.68%, rgba(240, 232, 164, 1) 82.67%, rgba(240, 214, 164, 1) 93.67%)' border='1.5px solid #C2C2C2' borderRadius={15} _hover={{cursor: 'pointer'}} data-group>
                        <Image pos='relative' w='100px' ml='auto' _groupHover={{visibility: 'visible'}} visibility='hidden' alt='arrow' src='/arrow.svg' />
                        <Text mt='auto' fontSize='32px'>Fallacy Identification</Text>
                    </Flex>
                    <Flex direction='column' w='100%' h='50%' mt={4} p={5} bg='linear-gradient(51deg, rgba(255, 255, 255, 1) 62.68%, rgba(164, 172, 240, 1) 82.67%, rgba(202, 164, 240, 1) 93.67%)' border='1.5px solid #C2C2C2' borderRadius={15} _hover={{cursor: 'pointer'}} data-group>
                        <Image pos='relative' w='100px' ml='auto' _groupHover={{visibility: 'visible'}} visibility='hidden' alt='arrow' src='/arrow.svg' />
                        <Text mt='auto' fontSize='32px'>Resource Aggregation</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};
export default HomePage;