import { Flex, HStack, Heading, Image, VStack } from "@chakra-ui/react";

export default function Profile() {
    return (
        <VStack gap={2} w={'100%'} alignItems={{ base: 'flex-start', lg: 'center' }} >

            <Flex alignItems={'center'} flexDir={{ lg: 'column' }} paddingInline={5} gap={5}>

                <Image
                    borderRadius='50%'
                    boxSize='150px'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                />
                <VStack alignItems={{ base: 'flex-start', lg: 'center' }}>

                    <Heading fontSize={25}>
                        Shubham Chhimpa
                    </Heading>
                    <Heading fontSize={20}>
                        Front End Developer
                    </Heading>
                </VStack>
            </Flex>
            <Flex justifyContent={'space-between'} gap={2} alignItems={'center'} width={'100%'} paddingInline={5} flexDir={{ lg: 'column' }}>

                <Image
                    borderRadius='50%'
                    boxSize='70px'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                />
                <Image
                    borderRadius='50%'
                    boxSize='70px'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                />
                <Image
                    borderRadius='50%'
                    boxSize='70px'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                />
                <Image
                    borderRadius='50%'
                    boxSize='70px'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                />
                <Image
                    borderRadius='50%'
                    boxSize='70px'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                />
            </Flex>

        </VStack>
    )
}