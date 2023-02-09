import { colors } from '@/styles/variables'
import { Button, Flex, IconButton, Image, Stack, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import React, { FunctionComponent } from 'react'
import PopoverConatiner from '../shared/Popover/PopoverConatiner'
const FillUserIcon = 'https://www.medexsepeti.com/image/icons/user_fill_icon.svg';
const outlineUserIcon = 'https://www.medexsepeti.com/image/icons/user_icon.svg';

const r =({isOpen}:any)=>(
<IconButton
    width={'25px'}
    bg={'transparent'}
    border={'1px soild blue'}
    aria-label='Search database'
    icon={<Image w={'25px'} src={isOpen?FillUserIcon:outlineUserIcon} />}
    _hover={{ backgroundColor:'transparent'}}
    />
)

const d =()=>(
<Flex bg={'AppWorkspace'} color={'CaptionText'}>
<IconButton
    width={'50px'}
    h={'100%'}
    bg={colors.bs_main}
    size={'lg'}
    border={'1px soild blue'}
    aria-label='Search database'
    icon={<Image src="https://www.medexsepeti.com/image/icons/user_icon.svg" />}
    />
</Flex>
)
export default function NavAction() {
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const { onOpen, onClose, isOpen } = useDisclosure()
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
            PopoverContentRender={r}
            PopoverTriggerRender={r}
            placement={'bottom-start'}
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
          
          />

        {/*  end:: user action  */}

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
  )
}
