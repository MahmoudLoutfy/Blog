'use client'

import Form from "../components/form";
import styled from "styled-components";

const PageWrapper = styled.section`
padding-top: 20px;
display: grid;
grid-template-columns: 12.5% 75% 12.5%;
background-color: white;
width: 100vw;
height: 100vh;
`

const FormWrapper = styled.div`
grid-column: 2/3;
margin: 40px 20px;
`

export default function CreateBlogPost () {
    return(
        <PageWrapper>
            <FormWrapper>
                <Form />
            </FormWrapper>
        </PageWrapper>
    );
}