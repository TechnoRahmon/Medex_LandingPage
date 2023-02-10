import { Box, Button, Flex, Img, Link, LinkBox, Text } from "@chakra-ui/react";


const LoginPopover = () => (
    <Flex direction={'column'} justify={'center'} align={'center'} px={'3'} py={'2'} gap={'2'}>
      <Button bg={"bs_yellow"} borderRadius={'15px'} color={'white'} _hover={{ bg: 'bs_main' }} w={'100%'}>
        Giriş Yap
      </Button>
      <Text color={'text.dark'} fontSize={'12px'}>
        Yeni müşteri misiniz?
        <Link as={'a'} color={'bs_main'} ms={'1'} href='https://www.medexsepeti.com/register'>Kayıt Ol</Link>
      </Text>
  
      {/* login as google and facebook */}
      <Flex align={'center'}>
        <Text color={'text.dark'} fontSize={'12px'} me='1'>
          Kolay erişim için
        </Text>
        <Link borderStartRadius={'15px'} py="1" px="2" bg={'bs_light_gray'} href='#1'>
          <Box w="20px" p="1" bg="white" borderRadius={'50px'}>
            <Img src='https://www.medexsepeti.com/image/for_remove/google-round.png' />
          </Box>
        </Link>
        <Link borderEndRadius={'15px'} py="1" px="2" bg={'social.facebook'} href='#2'>
          <Box w="20px" p="1" bg="white" borderRadius={'50px'}>
            <Img src='https://www.medexsepeti.com/image/for_remove/facebook-round.png' />
          </Box>
        </Link>
      </Flex>
  
      {/* login as google and facebook */}
  
    </Flex>
  )
  export default LoginPopover;