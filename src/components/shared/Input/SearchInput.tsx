import { Button, color, IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import { SearchIcon }from '@chakra-ui/icons'
import { colors, common, navbar } from '@/styles/variables'
export default function SearchInput() {

    const handleClick = () => {
        
    }
    
    return (
      <InputGroup size='md' width={'450px'} height={'50px'}>
        <Input
         _focus={{ outLine: "2px solid red" }}
            borderRadius={navbar.searchInput.sub_br}
            h={'50px'}
            type={'search'}
            placeholder='Ürün ara…'
            bg={'white'}
            />
        <InputRightElement width={'50px'} h="100%" justifyContent={'end'}>
            <IconButton
                width={'50px'}
                h={'100%'}
                borderRadius={'none'}
                borderEndEndRadius={navbar.searchInput.br}
                borderStartEndRadius={navbar.searchInput.br}
                bg={'bs_main'}
                size={'lg'}
                border={'1px soild blue'}
                aria-label='Search database'
                icon={<SearchIcon />}
                _hover={{ bg:'bs_sub_main'}}
                _focus={{ shadow: common.focusBoxShadow }}
                />
        </InputRightElement>
      </InputGroup>
    )
}