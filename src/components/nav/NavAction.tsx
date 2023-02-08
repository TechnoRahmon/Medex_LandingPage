import { Button, Stack } from '@chakra-ui/react'
import React from 'react'

export default function NavAction() {
  return (
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
  )
}