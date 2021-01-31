import React from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
    display: flex;
    overflow: hidden;
    height: 55px;
    border-bottom: 1px solid palevioletred;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
`; 

const SignInButton = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0 1em;
padding: 0.25em 1em;
width: 100px;
margin: 5px;
`;

const Logo = styled.h2`
    color: palevioletred; 
    margin-top: 10px;
`;

export default function NavbarComponent() {
  return (
    <div>
        <Navbar>
        <div> 
        <Logo>Chucky</Logo>
        </div>
        <div>
        <a href="#SignIn"><SignInButton>SignIn</SignInButton></a>
        </div>
        
        </Navbar>
    </div>
  );
}
