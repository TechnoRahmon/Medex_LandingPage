
import {
  Box,
  Flex,
  IconButton,
  Collapse,
  Stack,
  Button,
  Text ,
  useDisclosure,
  useColorModeValue,
  useBreakpointValue,
  Drawer,
  DrawerContent,
  useMediaQuery
} from '@chakra-ui/react'
import {
  CloseIcon,
  HamburgerIcon,
}from '@chakra-ui/icons'
import { MobileNav } from './Mobile/MobileNav';
import { DesktopNav } from './Desktop/DesktopNav';
import { SidebarContent } from './Mobile/SidebarContent';


export function Navbar() {

// ssr-friendly media query with fallback
const [isSmallerThan767] = useMediaQuery('(max-width: 767px)', {
  ssr: true,
  fallback: false, // return false on the server, and re-evaluate on the client side
})


  const { isOpen :DrawerIsOpen, onOpen:DrawerOnOpen, onClose :DrawerOnClose, onToggle:DrawerOnToggle} = useDisclosure();
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={DrawerOnToggle}
            icon={
              DrawerIsOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            Logo
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
          >
            Sign In
          </Button>
          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"pink.400"}
            href={"#"}
            _hover={{
              bg: "pink.300",
            }}
          >
            Sign Up
          </Button>
        </Stack>
      </Flex>


        {isSmallerThan767 ? 
                  <Drawer
                  autoFocus={false}
                  isOpen={DrawerIsOpen}
                  placement="left"
                  onClose={DrawerOnClose}
                  returnFocusOnClose={false}
                  onOverlayClick={DrawerOnClose}>
                  <DrawerContent>
                    <SidebarContent onClose={DrawerOnClose} />
                  </DrawerContent>
              </Drawer>
        :""}

    </Box>
  );
}




