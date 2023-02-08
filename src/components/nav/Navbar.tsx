
import {
  Box,
  Flex,
  IconButton,
  Stack,
  Button,
  useDisclosure,
  Drawer,
  DrawerContent,
  useMediaQuery,
  Image
} from '@chakra-ui/react'
import {
  CloseIcon,
  HamburgerIcon,
}from '@chakra-ui/icons'
import { SidebarContent } from './Mobile/SidebarContent';
import {colors , navbar , common} from '@/styles/variables'
import SearchInput from '../shared/Input/SearchInput';
import NavAction from './NavAction';

export function Navbar() {

// ssr-friendly media query with fallback
const [isSmallerThan767] = useMediaQuery('(max-width: 767px)', {
  ssr: true,
  fallback: false, // return false on the server, and re-evaluate on the client side
})


  const { isOpen :DrawerIsOpen, onOpen:DrawerOnOpen, onClose :DrawerOnClose, onToggle:DrawerOnToggle} = useDisclosure();
  return (
    <Box bg={colors['bs_primary']}>
      <Flex
        width={common['w_80']}
        mx={'auto'}
        color={colors['bs_white']}
        minH={navbar['min_height']}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
      >
        {/*begin:: BurgerNav toggler */}
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
        {/* end:: BurgerNav toggler */}

        {/*begin:: logo section */}
        <Flex flex={{ base: 1 }} justify={{ base: "space-between" }}>
            <Box width={navbar.logo.width} minH={navbar.logo.height}>
                <Image src='/logo.svg' alt='Dan Abramov' width={'100%'} />
            </Box>

            <SearchInput/>

            {/*start  Social Media links section */}
            <NavAction/>
            {/*end ::  Social Media links section */}
        </Flex>
        {/*begin:: logo section */}
      </Flex>

        {/* brgin :: mobile Drawer */}
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
        {/* end :: mobile Drawer */}
    </Box>
  );
}




