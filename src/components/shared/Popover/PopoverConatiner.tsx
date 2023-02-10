import React from 'react'
import { Box,  PlacementWithLogical,  Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, ResponsiveValue, UsePopoverProps } from '@chakra-ui/react'

type IPopoverConatinerProp = {
    popoverContentBgColor:ResponsiveValue<any>,
    showPopoverContent:boolean;
    PopoverTriggerRender:any;
    PopoverContentRender:any;
    PopoverContentProps:any;
    trigger:UsePopoverProps['trigger'];
    placement:PlacementWithLogical;
    isOpen:boolean;
    onOpen:()=>void;
    onClose:()=>void;
}
export default function PopoverConatiner({
    PopoverContentProps,
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
        <PopoverContent {...PopoverContentProps}>
            <PopoverArrow />
            <PopoverBody>
                <PopoverContentRender/>
            </PopoverBody>
        </PopoverContent>
        ):''}
    </Popover>
    </Box>

  )
}
