'use client'

import Link from "next/link";
import styled from "styled-components";

interface blogPost {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  const PostWrapper = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    //backdrop-filter: blur(20px);
  `
  const PostTitle = styled.div`
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: 600;
  `
  const PostBody = styled.div`
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    width: 100%;
    white-space: normal;
    word-wrap: break-word;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  `

export default function Post({postInfo} : {postInfo : blogPost}) {

    return (
        <Link href={`/${postInfo.id}`} >
            <PostWrapper>
                <PostTitle>
                    {postInfo.title}
                </PostTitle>
                <PostBody>
                    {postInfo.body}
                </PostBody>
            </PostWrapper>
        </Link>
    );

}