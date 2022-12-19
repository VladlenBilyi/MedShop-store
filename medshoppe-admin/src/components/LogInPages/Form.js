 import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { signinAPI, signupAPI } from '../../redux/Auth/auth.action';
import { useToast } from "@chakra-ui/react";
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

  
 function FormLogin() {
     const [signIn, toggle] = React.useState(true);
     const [login , SetLogin] = React.useState(initialStateLogin);
     const [signup , SetSignup] = React.useState(initialStateSignup);
     const {isAuth,error,data} = useSelector(store=>store.auth)
     const toast = useToast();
     const dispatch = useDispatch();

     const HandelChangeSignup =(e)=>{
         e.preventDefault();
         const {name,value}=e.target;
         SetSignup({...signup,[name]:value})
     }
     
     const HandelChangeLogin =(e)=>{
        e.preventDefault();
        const {name,value}=e.target;
        SetLogin({...login,[name]:value})
     }

     const HandelSubmitForLogin=(e)=>{
        e.preventDefault();
        dispatch(signinAPI(login)).then((res)=>{
            if(res){
                SetLogin(initialStateLogin)
                toast({
                    title: 'Login Success',
                    description: `Your Welcome in Admin Panel`,
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    position:'top'
                  })
            }
            else{
                toast({
                    title: 'Wrong Credential',
                    description: "Only Admin can access this application",
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                    position:'top'
                  })
            }
        })
     }

     const HandelSubmitForSignup=(e)=>{
        e.preventDefault();
        dispatch(signupAPI(signup)).then((res)=>{
            if(res){
                toast({
                    title: 'Signup Success',
                    description: `Your Registration is success`,
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    position:'top'
                  })
            }
            else{
                toast({
                    title: 'Wrong Opration',
                    description: "Something went wrong plaese try again !",
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                    position:'top'
                  })
            }
            SetSignup(initialStateSignup)
        })
        

        
        
     }

     if (isAuth) {
       
        return <Navigate to="/" />;
      }

      return(
         <>
         
           <Components.Container>
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
                       <Components.Button onClick={HandelSubmitForLogin}>Sign In</Components.Button>
                   </Components.Form>
              </Components.SignInContainer>              

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
                                Sign Up
                            </Components.GhostButton> 
                      </Components.RightOverlayPanel>
  
                  </Components.Overlay>
              </Components.OverlayContainer>
          </Components.Container>
          
          </>
      )
 }

 export default FormLogin;