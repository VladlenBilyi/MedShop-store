import { Box, Flex } from "@chakra-ui/react";
import FormLogin from "../components/LogInPages/Form";

function Login(){
    return <Flex w='90%' m='auto' justifyContent='center' alignItems='center' pt='25px'>
        <FormLogin />
       </Flex>          
}


export default Login;