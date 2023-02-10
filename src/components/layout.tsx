
import { colors } from "@/styles/variables";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Navbar } from "./nav/Navbar";


// 1. import `ChakraProvider` component

export const theme = extendTheme({
  colors: {
    bs_primary : colors.get('bs_primary'),
    bs_white:colors.get('bs_white'),
    bs_main:colors.get('bs_main'),
    bs_sub_main:colors.get('bs_sub_main'),
    bs_yellow:colors.get('bs_yellow'),
    bs_light_gray:colors.get('bs_light_gray'),
    bs_muted_dark:colors.get('bs_muted_dark'),
    text:{
      dark:colors.get('text_dark')
    },
    social:{
      facebook:colors.get('bg_facebook')
    }
  },
})

export default function Layout({ children }:any) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar/>
      <main className='container'>
        <div className='body-content br-primary'>
          {children}
        </div>
      </main>
    </ChakraProvider>
  )
}