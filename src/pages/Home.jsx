import { Box, Flex } from '@chakra-ui/react'
import About from '../components/About'
import Profile from '../components/Profile'
export default function Home() {
    return <>

        <Flex position={'fixed'} inset={0} flexDir={{base:'column', lg:'row'}}   overflow={{base:'auto',lg:'hidden'}}>
            <Box bg='blue' flex={{md:2}} height={'100%'} paddingBlock={5} 
            bgGradient='linear(to-b, blue,blue, black)'
            >
                <Profile />
            </Box>
            <Box  bg={'black'} flex={{md:4, "xl":6}} overflow={{lg:'auto'}} >
                <About />
                <About />
                <About />
                <About />
            </Box>
        </Flex>
    </>
}