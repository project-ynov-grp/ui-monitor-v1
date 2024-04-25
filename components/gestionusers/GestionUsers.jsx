import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Center,
  Table,
  Button,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Image,
  Icon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import StepFormulaire from "./StepFormulaire";

export default function GestionUsers() {
  const [allUsers, setAllUsers] = useState([]);
  const [isOpen,setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const steps = [
    { title: "Première étape", description: "Informations" },
    { title: "Deuxième étape", description: "Permissions" },
    { title: "Troisième étape", description: "Mot de passe" },
  ];
  const OverlayOne = () => (
    <ModalOverlay bg={"none"} backdropFilter="blur(10px) " />
  );
  const [overlay, setOverlay] = useState(<OverlayOne />);
  const [activeStep, setActiveStep] = useState(0);

  const handleNextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
    setActiveStep(0); 
  };
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/getalluser");
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setAllUsers(data.users);
        } else {
          console.error("Erreur de réponse:", response.status);
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des utilisateurs:",
          error
        );
      }
    };
    fetchUser();
  }, []);
  return (
    <>
      <Box justifyContent={"center"} mb={8} fontFamily={"marianne"}>
        <Center>
          <Heading fontFamily={"marianne"}>Gestion Utilisateur</Heading>
        </Center>
      </Box>
      <Center mt={8}>
        <Box
          w={"95%"}
          bg={"#2645F9"}
          mx={4}
          justifyContent={"center"}
          borderRadius="10px"
          h={"49vh"}
        >
          <Heading as={"h4"} size={"md"} fontFamily={"marianne"} p={4}>
            Utilisateurs :
          </Heading>
          <Table color={"white"}>
            <Thead color={"white"} fontFamily={"marianne"}>
              <Tr>
                <Th color={"white"} fontFamily={"marianne"}>
                  Identifiant
                </Th>
                <Th color={"white"} fontFamily={"marianne"}>
                  Pseudonyme
                </Th>
                <Th color={"white"} fontFamily={"marianne"}>
                  email
                </Th>
                <Th color={"white"} fontFamily={"marianne"}>
                  rôle
                </Th>
                <Th color={"white"} fontFamily={"marianne"}>
                  Céation le
                </Th>
                <Th color={"white"} fontFamily={"marianne"}>
                  Mise à jour le
                </Th>
                <Th color={"white"} fontFamily={"marianne"}>
                  Actions
                </Th>
              </Tr>
            </Thead>
            <Tbody bg={"#2645F9"}>
              {allUsers.map((user) => (
                <Tr key={user.id} bg={"#2645F9"}>
                  <Td fontFamily={"marianne"}>{user.user_id}</Td>
                  <Td fontFamily={"marianne"}>{user.username}</Td>
                  <Td fontFamily={"marianne"}>{user.email}</Td>
                  <Td fontFamily={"marianne"}>
                    {user.role === "super admin" ? (
                      <>
                        {user.role}{" "}
                        <Image
                          src="coronne.png"
                          alt="Super Admin"
                          boxSize={"20px"}
                          display="inline-block"
                        />
                      </>
                    ) : (
                      user.role
                    )}
                  </Td>
                  <Td>{new Date(user.created_at).toLocaleString()}</Td>
                  <Td>{new Date(user.updated_at).toLocaleString()}</Td>
                  {user.role == "super admin" ? (
                    <Td>Aucune action à apporter</Td>
                  ) : (
                    <>
                      <Td>
                        <Button
                          bg={"white"}
                          size="sm"
                          display={"inline-block"}
                          m={2}
                        >
                          <Icon as={EditIcon} />
                        </Button>
                        <Button
                          bg={"#FF0000"}
                          size="sm"
                          display={"inline-block"}
                          m={2}
                        >
                          <Icon as={DeleteIcon} color={"white"} />
                        </Button>
                      </Td>
                    </>
                  )}
                </Tr>
              ))}
            </Tbody>
          </Table>
          <Center>
            <Button
              bg={"#041538"}
              color={"white"}
              fontFamily={"marianne"}
              top={10}
              _hover={{ bg: "white", color: "#2645F9" }}
              onClick={() => {
                setOverlay(<OverlayOne />);
                onOpen()
              }}
            >
              Ajouter un utilisateur
            </Button>
          </Center>
        </Box>
      </Center>
      <Modal isOpen={isOpen} onClose={handleCloseModal} size="md">
        {overlay}
        <ModalContent maxW="70%">
          <ModalHeader fontFamily={"marianne"}>
            Ajouter un utilisateur
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stepper
              size="lg"
              colorScheme="red"
              index={activeStep}
              fontFamily={"marianne"}
            >
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepIndicator>
                    <StepStatus
                      complete={<StepIcon />}
                      incomplete={<StepNumber />}
                      active={<StepNumber />}
                    />
                  </StepIndicator>

                  <Box flexShrink="0">
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                  </Box>

                  <StepSeparator />
                </Step>
              ))}
            </Stepper>
            <StepFormulaire state={activeStep} userconnected={allUsers}/>
          </ModalBody>

          <ModalFooter fontFamily={"marianne"}>
            <Button colorScheme="blue" mr={3} onClick={handleCloseModal}>
              Fermer
            </Button>
            <Button
              variant="ghost"
              onClick={handlePrevStep}
              isDisabled={activeStep === 0}
            >
              Précédent
            </Button>
            <Button
              colorScheme="blue"
              onClick={handleNextStep}
              isDisabled={activeStep === 2}
            >
              Suivant
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}