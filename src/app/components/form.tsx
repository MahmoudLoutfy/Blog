'use client'

import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
`

const InputWrapper = styled.input`
    font-size: 22px;
    border-radius: 10px;
    padding: 4px;
    border: 1px solid black;
`

const TextAreaWrapper = styled.textarea`
    resize: none;
    overflow: hidden;
    min-height: 100px;
    font-size: 18px;
    border-radius: 10px;
    padding: 4px;
    border: 1px solid black;
`
const SubmitWrapper = styled.input`
    font-size: 24px;
    height: 40px;
    width: 80px;
    border-radius: 10px;
    border: 1px solid rgb(125, 98, 58);;
    color: rgb(125, 98, 58);
    background-color: white;
    &:hover {
        cursor: pointer;
        background-color: rgba(125, 98, 58, 0.2);
    }
`

export default function Form() {
    const [formData,setFormData] = useState({title:'',body:''})

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
      const TextAreaWrapper = textareaRef.current;
  
      if (TextAreaWrapper) {
        const resizeTextarea = () => {
            TextAreaWrapper.style.height = 'auto';
            TextAreaWrapper.style.height = `${TextAreaWrapper.scrollHeight}px`;
        };
  
        TextAreaWrapper.addEventListener('input', resizeTextarea);
  
        // Trigger the input event to resize the textarea initially
        resizeTextarea();
  
        return () => {
            TextAreaWrapper.removeEventListener('input', resizeTextarea);
        };
      }
    }, [handleInputChange]);

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [event.target.name]: event.target.value,
          }));
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(formData);
      }

    return(
        <FormWrapper onSubmit={(e) => {handleSubmit(e)}}>
            <InputWrapper name="title" 
                type="text" 
                placeholder="Title" 
                required 
                autoComplete="off"
                value={formData.title} 
                onChange={(e) =>handleInputChange(e)} />
            <TextAreaWrapper name="body" 
                ref={textareaRef}
                placeholder="Body" 
                required 
                autoComplete="off"
                value={formData.body} 
                onChange={(e) =>handleInputChange(e)} />
            <SubmitWrapper type="submit" value="Post" />
        </FormWrapper>
    );
};