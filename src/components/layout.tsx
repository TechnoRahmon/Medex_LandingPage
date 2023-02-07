
import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "./nav/Navbar";


// 1. import `ChakraProvider` component


export default function Layout({ children }:any) {
  return (
    <ChakraProvider>
      <Navbar/>
      <main className='container'>
        <div className='body-content br-primary'>
          {children}
        </div>
      </main>
    </ChakraProvider>
  )
}