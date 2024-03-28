import {
  Box,
  chakra,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
  useBreakpointValue,
  Button,
  Center,
  Image
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Ressourceslink() {
  return (
    <Box pt={20} fontFamily={"marianne"}>
      <chakra.h3
        fontSize="4xl"
        fontWeight="bold"
        mb={2}
        textAlign="center"
        color={"white"}
      >
        Ressources Utiles
      </chakra.h3>
      <Text mb={20} textAlign="center" color={"white"}>
        Explorez notre trésor numérique : Ressources essentielles pour briller
        dans le monde du numérique.
      </Text>
      <Center>
        <HStack mt={10} spacing={20}>
          <NextLink href={"/"}>
            <Image src="/anssi.png" alt="cnil"/>
          </NextLink>

          <NextLink href={"/"}>
            <Image src="/cnil.png" alt="cnil"/>
          </NextLink>
        </HStack>
      </Center>
    </Box>
  );
}
