import { Box, Flex, useColorModeValue, Text, Link, Spacer, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import { tokenAtom } from "../../state/auth/auth.atom";

const Portals: React.FC = () => {
    const currentToken = useRecoilValue(tokenAtom);

    const portalNavigator = (portPrefix: string) => {
        window.location.href = `http://localhost:${portPrefix}/auth/token_handler?token=${currentToken}`
    }

    const portals: [string, string][] = Object.entries({
    
        8000: "Procenitelj",
        9000: "Poreska",
       
    });
    return <Grid templateColumns={"repeat(4, 1fr)"} gap={6}>
        {portals.map((portal) => (
            <GridItem w='100%' h='12'>
                <Box w="full" maxW="sm" mx="auto" px={4} py={3} bg={useColorModeValue("white", "gray.800")} shadow="md" rounded="md" flex="1">
                    <Text size="xl">
                        <Link onClick={() => portalNavigator(portal[0])}>{portal[1]}</Link>
                    </Text>
                </Box>
            </GridItem>
        ))} </Grid>
}

export default Portals;