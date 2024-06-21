'use client'

import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.section`
padding: 0 15px;
padding-bottom: 0px;
display: flex;
justify-content: space-between;
position: fixed;
width: 100%;
background-color: rgba(125, 98, 58, 0.7);
height: 40px;
`

const Styledlink = styled(Link)`
display: flex;
align-items: center;
font-size: 20px;
font-weight: 500;
color: white;
&:hover {
    color: rgb(0, 0, 0);
} 
`

export default function NavBar() {

    return (
        <Wrapper>
            <Styledlink href={`/`}>Homepage</Styledlink>
            <Styledlink href={`/create`}>Create</Styledlink>
        </Wrapper>
    );

}