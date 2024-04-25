import { useState } from "react";
import { useRouter } from "next/router";
import { LockIcon, UnlockIcon } from "@chakra-ui/icons";
import Cookies from "js-cookie";
import {
  Box,
  Image,
  Input,
  Button,
  Center,
  chakra,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Text,
  InputRightElement,
  IconButton,
  useDisclosure,
  useBreakpointValue,
  Select,
} from "@chakra-ui/react";

export default function StepFormulaire({ state, userconnected }) {
  const formbox = useBreakpointValue({ "2xl": "70vh", "3xl": "50vh" });
  const padding = useBreakpointValue({ "2xl": "2vh", "3xl": "5vh" });
  const input = useBreakpointValue({ "2xl": "47vh", "3xl": "40vh" });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("")
  const [confirmPass, setconfirmPass] = useState("")
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "email") {
      setPassword(value);
    }
  };
  const isSuper = userconnected.map((user) => user.role);

  return (
    <>
      {state == 0 && (
        <Box mt={8}>
          <FormControl mx={2} my={4} fontFamily={"marianne"}>
            <Center>
              <Box>
                <FormLabel color={"black"}>Identifiant</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Image
                      src={"/icons/user.svg"}
                      alt="User Icon"
                      boxSize={7}
                      pt={0}
                    />
                  </InputLeftElement>
                  <Input
                    type="text"
                    name="username"
                    placeholder="Saisissez un identifiant"
                    value={username}
                    onChange={handleChange}
                    mb={2}
                    w={input}
                    bg={"#B2B1B1"}
                  />
                </InputGroup>
              </Box>
            </Center>
          </FormControl>
          <FormControl mx={2} my={4} fontFamily={"marianne"}>
            <Center>
              <Box>
                <FormLabel color={"black"}>Adresse email</FormLabel>

                <InputGroup>
                  <Input
                    type={"text"}
                    name="email"
                    placeholder="Saisissez une adresse email"
                    value={password}
                    onChange={handleChange}
                    mb={2}
                    w={input}
                    bg={"#B2B1B1"}
                    required={true}
                  />
                </InputGroup>
              </Box>
            </Center>
          </FormControl>
        </Box>
      )}
      {state == 1 && (
        <Box mt={8}>
          <FormControl mx={2} my={4} fontFamily={"marianne"}>
            <Center>
              <Box>
                <FormLabel color={"black"}>Permissions à donner :</FormLabel>
                <Select>
                  <option defaultValue={""}>Saisissez une permission</option>
                  <option value="admin">Admin</option>
                  <option value="dev">Dev</option>
                  {isSuper == "super admin" ? (
                    <option value="super admin">Super Admin</option>
                  ) : (
                    ""
                  )}
                </Select>
              </Box>
            </Center>
          </FormControl>
        </Box>
      )}
      {state == 2 && (
        <Box mt={8}>
          <FormControl mx={2} my={4} fontFamily={"marianne"}>
            <Center>
              <Box>
                <FormLabel color={"black"}>Mot de passe</FormLabel>

                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Image
                      src={"/icons/lock.svg"}
                      alt="Lock Icon"
                      boxSize={7}
                      pt={0}
                    />
                  </InputLeftElement>
                  <Input
                    type={isOpen ? "text" : "password"}
                    name="password"
                    placeholder="Saisissez votre mot de passe"
                    value={password}
                    onChange={handleChange}
                    mb={2}
                    w={input}
                    bg={"#B2B1B1"}
                  />
                  <InputRightElement>
                    <IconButton
                      aria-label={
                        isOpen
                          ? "Masquer le mot de passe"
                          : "Afficher le mot de passe"
                      }
                      icon={isOpen ? <UnlockIcon /> : <LockIcon />}
                      variant="ghost"
                      color={"#2645F9"}
                      _hover={{}}
                      ml={0}
                      onClick={onToggle}
                    />
                  </InputRightElement>
                </InputGroup>
              </Box>
            </Center>
          </FormControl>
          <FormControl mx={2} my={4} fontFamily={"marianne"}>
          <Center>
            <Box>
                <FormLabel color={"black"}>Confirmer mot de passe</FormLabel>

                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Image
                      src={"/icons/lock.svg"}
                      alt="Lock Icon"
                      boxSize={7}
                      pt={0}
                    />
                  </InputLeftElement>
                  <Input
                    type={isOpen ? "text" : "password"}
                    name="password"
                    placeholder="Confimer votre mot de passe"
                    value={password}
                    onChange={handleChange}
                    mb={2}
                    w={input}
                    bg={"#B2B1B1"}
                  />
                  <InputRightElement>
                    <IconButton
                      aria-label={
                        isOpen
                          ? "Masquer le mot de passe"
                          : "Afficher le mot de passe"
                      }
                      icon={isOpen ? <UnlockIcon /> : <LockIcon />}
                      variant="ghost"
                      color={"#2645F9"}
                      _hover={{}}
                      ml={0}
                      onClick={onToggle}
                    />
                  </InputRightElement>
                </InputGroup>
              
              
            </Box>
          </Center>
        </FormControl>
        <Center>
            <Button
            //   onClick={handleLogin}
              bg={"#041538"}
              color={"white"}
              px={"5vh"}
              _hover={{ bg: "white", color: "#2645F9" }}
              fontFamily={"marianne"}
            >
              Créer le compte
            </Button>
          </Center>
        </Box>
      )}
    </>
  );
}