import { Box, Code, Text } from "@chakra-ui/react";

export default function Methods() {
    return (
        <Box display={'flex'} flexDir={'column'} gap={'2rem'} padding={'2rem'} fontSize={'2rem'}>
            
            <Code w={'fit-content'}> 
                npm i gh-pages
            </Code>
            <Text gap={'1rem'} display={'flex'} alignItems={'center'}>
                Add
                <Code>
                    base: '/name-of-repo/'
                </Code>
                to
                <Code>
                    defineConfig

                </Code>
                in "vite.config.js" file
            </Text>
            <Text gap={'1rem'} display={'flex'} alignItems={'center'}>
                add
                <Code>
                    "predeploy": "vite build",
                    "deploy": "gh-pages -d dist",
                </Code>
                to
                <Code>
                    scripts
                </Code>
                in "package.json" file
            </Text>
            <Text gap={'1rem'} display={'flex'} alignItems={'center'}>
                add
                <Code>
                "homepage": "https://git-hub-name.github.io/repo-name",
                </Code>
                in "package.json" file
                
            </Text>
            <Text gap={'1rem'} display={'flex'} alignItems={'center'}>
            
                <Code>
                npm run deploy
                </Code>
                
                
            </Text>
        </Box>
    )
}