import { Box, Heading, Text, VStack } from "@chakra-ui/react";

export default function About() {
    return (
        <Box p={50} color={'white'} w={"100%"} >


            <Heading fontSize={40}>About me</Heading>
            <VStack gap={30}>
            <Text fontSize={25} >


                Pleased to meet you, my name is Gabriel, I am 22 years old.
                I love the tech universe and how it is always evolving. The fact that I can help or facilitate someone's life excites me a lot. I always liked to think about how to solve problems and now I can do this with lines of code.
            </Text>
            
            <Text fontSize={25}>
                
                I started my studies 2 years ago out of pure curiosity, I worked with design but I wanted to know how websites were made. One day I decided to try to learn on my own so I searched for content on Youtube and ended up developing knowledge of HTML and CSS. After a few weeks, I realized that I really liked this and so I invested in online courses and evolved more and more.
            </Text>
            <Text fontSize={25}>
                
                Nowadays I focus on my growth in the work environment and learning from my tasks, but in my free time, I'm always developing side projects to learn new things. Recently I also started to create tutorials for Youtube so I could develop teaching skills.
            </Text>
            <Text fontSize={25}>
                
                Something that always caught my attention was Front End projects with different effects, for example, websites with custom elements/animations that improve the UI/UX.
            </Text>
            </VStack>
        </Box>
    )
}