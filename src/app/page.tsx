'use client'

import Post from "./components/post";
import styled from "styled-components";

interface blogPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PageWrapper = styled.section`
  display: grid;
  grid-template-columns: 12.5% 75% 12.5%;
  background-color: white;
`

const PageBody = styled.div`
  grid-column: 2/3;
`
const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`
const Posts = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin: 10px 0px;
`

export default async function Home() {
  const blogs = await getBlogPosts();
  return (
    <PageWrapper>
      <PageBody>
        <Title>Blog Posts</Title>
        <Posts>
          {blogs.map(blog => (
            <Post key={blog.id} postInfo={blog} />
          ))}
        </Posts>
      </PageBody>
    </PageWrapper>
  );
};

async function getBlogPosts () : Promise<blogPost[]>
{
  await new Promise(resolve => setTimeout(resolve, 1000));
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const blogs: blogPost[] = await res.json();

  return blogs;
}