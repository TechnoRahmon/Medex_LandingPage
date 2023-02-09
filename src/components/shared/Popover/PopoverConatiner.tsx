import React, { FunctionComponent } from 'react'
import { Box,  Button,  PlacementWithLogical,  Popover, PopoverContent, PopoverTrigger, ResponsiveValue, UsePopoverProps } from '@chakra-ui/react'

type IPopoverConatinerProp = {
    popoverContentBgColor:ResponsiveValue<any>,
    showPopoverContent:boolean;
    PopoverTriggerRender:any;
    PopoverContentRender:any;
    trigger:UsePopoverProps['trigger'];
    placement:PlacementWithLogical;
    isOpen:boolean;
    onOpen:()=>void;
    onClose:()=>void;
}
export default function PopoverConatiner({
    popoverContentBgColor,
    PopoverContentRender,
    showPopoverContent,
    PopoverTriggerRender,
    trigger,
    placement,
    isOpen,
    onOpen,
    onClose,
}:IPopoverConatinerProp) {
  return (
    <Box>
    <Popover trigger={trigger} placement={placement} isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
        <PopoverTrigger>
            <Box bg={'transparent'}>
            <PopoverTriggerRender isOpen={isOpen} />
            </Box>
                
            
        </PopoverTrigger>

        {showPopoverContent ?  (
        <PopoverContent
            border={0}
            boxShadow={"xl"}
            bg={popoverContentBgColor}
            p={4}
            rounded={"xl"}
            minW={"sm"}
            >
           test
        </PopoverContent>
        ):''}
    </Popover>
    </Box>

  )
}
