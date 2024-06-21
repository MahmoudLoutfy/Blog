'use client'

import styled from "styled-components";

interface blogPost {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  
  const PageWrapper = styled.section`
  padding-top: 40px;
  display: grid;
  grid-template-columns: 12.5% 75% 12.5%;
  background-color: white;
  width: 100vw;
  height: 100vh;
  `

  const Title = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: 600;
  `

  const Body = styled.div`
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  `

  const Post = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: 2/3;
  `

  export default async function Blog({params}: { params: { id: string }}) {
    const id = params.id
    const blogPostInfo = await getBlogPostInfo(id);
    return (
      <PageWrapper>
        <Post>
            <Title>{blogPostInfo.title}</Title>
            <Body>{blogPostInfo.body}</Body>
        </Post>
      </PageWrapper>
    );
  };

  async function getBlogPostInfo( id: string) : Promise<blogPost> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    
    if (!res.ok) {
      //throw new Error('Failed to fetch the blog post');
    }
  
    let post : blogPost = await res.json();
    return post;
  }
  