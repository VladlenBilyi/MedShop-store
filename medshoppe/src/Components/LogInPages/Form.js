 import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signinAPI, signupAPI } from "../../Store/Auth/auth.action";
 import * as Components from './Design';
 
 const initialStateLogin = {
    email:"",
    password:""
 }

 const initialStateSignup = {
    username:"",
    email:"",
    password:""
 }


  
 function Form() {
     const [signIn, toggle] = React.useState(true);
     const [login , SetLogin] = React.useState(initialStateLogin);
     const [signup , SetSignup] = React.useState(initialStateSignup);
     const {loading,data,token} = useSelector(store=>store.auth)
     const dispatch = useDispatch();
    const navigate=useNavigate();
     const HandelChangeSignup =(e)=>{
         e.preventDefault();
         const {name,value}=e.target;
         SetSignup({...signup,[name]:value})
        //  console.log(signup);
     }
     
     const HandelChangeLogin =(e)=>{
        e.preventDefault();
        const {name,value}=e.target;
        SetLogin({...login,[name]:value})
        // console.log(login);
     }

     const HandelSubmitForLogin=(e)=>{
        e.preventDefault();
        dispatch(signinAPI(login)).then((res)=>{

            SetLogin(initialStateLogin)
            console.log(res);    
           navigate("/")      
        })
        
     }
     //console.log(token);

     const HandelSubmitForSignup=(e)=>{
        e.preventDefault();
        // console.log(signup)
        dispatch(signupAPI(signup)).then((res)=>{
            SetSignup(initialStateSignup)
            console.log(res);
        })
        

        
        
     }

      return(
         <>
         
          <Components.Container>
          <Flex flexDirection={["column","column","row","row"]}>
            <Box>
              <Components.SignUpContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Create Account</Components.Title>
                      <Components.Input type='text' placeholder='Name'  name='username' onChange={HandelChangeSignup} />
                      <Components.Input type='email' placeholder='Email'  name='email' onChange={HandelChangeSignup}/>
                      <Components.Input type='password' placeholder='Password' name='password' onChange={HandelChangeSignup} />
                      <Components.Button onClick={HandelSubmitForSignup}>Sign Up</Components.Button>
                  </Components.Form>
              </Components.SignUpContainer>

              <Components.SignInContainer signinIn={signIn}>
                   <Components.Form>
                       <Components.Title>Sign in</Components.Title>
                       <Components.Input type='email' placeholder='Email' onChange={HandelChangeLogin} name='email' />
                       <Components.Input type='password' placeholder='Password' onChange={HandelChangeLogin} name='password'/>
                       <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                       <Components.Button onClick={HandelSubmitForLogin}>Sigin In</Components.Button>
                   </Components.Form>
              </Components.SignInContainer>
              </Box>
              

              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn}>

                  <Components.LeftOverlayPanel signinIn={signIn}>
                      <Components.Title>Medshoppe</Components.Title>
                      <Components.Paragraph>
                          To keep connected with us please login with your personal info
                      </Components.Paragraph>
                      <Components.GhostButton onClick={()=>toggle(true)}>
                          Sign In
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel>

                      <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Medshoppe</Components.Title>
                        <Components.Paragraph>
                            Enter Your personal details and start journey with us
                        </Components.Paragraph>
                            <Components.GhostButton onClick={()=>toggle(false)}>
                                Sigin Up
                            </Components.GhostButton> 
                      </Components.RightOverlayPanel>
  
                  </Components.Overlay>
              </Components.OverlayContainer>
              </Flex>
          </Components.Container>
          
          </>
      )
 }

 export default Form;