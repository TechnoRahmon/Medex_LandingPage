
import { Box, Button, Divider, Flex, IconButton, Image, Img, Link, Stack, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import PopoverConatiner from '../../shared/Popover/PopoverConatiner'
import LoginPopover from './loginPopover';
const FillUserIcon = 'https://www.medexsepeti.com/image/icons/user_fill_icon.svg';
const outlineUserIcon = 'https://www.medexsepeti.com/image/icons/user_icon.svg';
const heartOutlineIcon = "https://www.medexsepeti.com/image/icons/heart_icon.svg";
const heartIcon = 'https://www.medexsepeti.com/image/icons/heart_fill_icon.svg';
const cartIcon = 'https://www.medexsepeti.com/image/icons/cart_fill.svg';
const cartOutLineIcon ='https://www.medexsepeti.com/image/icons/cart_icon.svg';

const UserIconTrigger = ({ isOpen }: any) => (
  <Flex direction={'column'} justify='center' align={'center'}>
      <IconButton
        width={'25px'}
        bg={'transparent'}
        border={'1px soild blue'}
        aria-label='Search database'
        icon={<Image w={'25px'} src={isOpen ? FillUserIcon : outlineUserIcon} />}
        _hover={{ backgroundColor: 'transparent' }}
      />
      <Text color="white" fontSize={'10px'}>
        Hesabım
      </Text>
  </Flex>
)


export default function NavAction() {
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const { onOpen, onClose, isOpen } = useDisclosure();

  const [ heartImage , setHeartImage ] = useState<string>(heartOutlineIcon);
  const [ cartImage , setCartImage ] = useState<string>(cartOutLineIcon);

  return (
    <Stack
      flex={{ base: 1, md: 0 }}
      justify={"flex-end"}
      direction={"row"}
      spacing={6}
    >

      {/* begin:: user action  */}
        <PopoverConatiner
          showPopoverContent={true}
          trigger={'hover'}
          popoverContentBgColor={popoverContentBgColor}
          PopoverTriggerRender={UserIconTrigger}
          PopoverContentRender={LoginPopover}
          PopoverContentProps={{ w: '220px' }}
          placement={'bottom'}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}

        />

      


      {/*  end:: user action  */}
      <Divider orientation='vertical'  bg={'bs_muted_dark'} />

    {/* begin:: fav icon section  */}
    <Flex direction={'column'} justify='center' align={'center'} cursor='pointer'
          onMouseOver={()=>{ setHeartImage(heartIcon)}}
          onMouseOut={()=>{ setHeartImage(heartOutlineIcon)}}
          display={{ base: "none", md: "flex" }} 
          >
          <IconButton
            width={'25px'}
            bg={'transparent'}
            border={'1px soild blue'}
            aria-label='Search database'
            icon={<Image w={'25px'} src={heartImage} />}
            _hover={{ backgroundColor: 'transparent' }}
          />
          <Text color="white" fontSize={'10px'}>
          Favorilerim
          </Text>
      </Flex>
      {/* end :: fav icon section  */}

      <Divider orientation='vertical'  bg={'bs_muted_dark'} />


    {/* begin:: cart section  */}
    
      <Flex direction={'column'} justify='center' align={'center'}  cursor="pointer"
              onMouseOver={()=>{ setCartImage(cartIcon)}}
              onMouseOut={()=>{ setCartImage(cartOutLineIcon)}}>
            <IconButton
              width={'25px'}
              bg={'transparent'}
              border={'1px soild blue'}
              aria-label='Search database'
              icon={<Image w={'25px'} src={cartImage} />}
              _hover={{ backgroundColor: 'transparent' }}
            />
            <Text color="white" fontSize={'10px'}>
            Sepetim
            </Text>
        </Flex>
      {/* end :: cart section  */}

    </Stack>
  )
}
