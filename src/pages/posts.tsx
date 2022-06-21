import React from 'react';
import Grid from '@mui/material/Grid';
import Layout from '@theme/Layout';
import PostCard from "../components/PostCard";
import typeupImage from '../../static/projectsImages/typeup.png';
import { Container } from '@mui/material';

export default function Posts() {

  const post1 = {
    date: "2022.06.21",
    description: "description",
    image: typeupImage,
    imageLabel: "image label",
    title: "post1",
  }

  const post2 = {
    date: "2022.06.21",
    description: "description",
    image: typeupImage,
    imageLabel: "image label",
    title: "post2",
  }

  const post3 = {
    date: "2022.06.21",
    description: "description",
    image: typeupImage,
    imageLabel: "image label",
    title: "post3",
  }

  const posts = [post1, post2, post3];

  return (
    <Layout>
      <Container maxWidth="lg" sx={{p: 5}}>
        <Grid container spacing={4}  >
        {posts.map((post) => (
          <PostCard key={post.title} post={post} />
        ))}
        </Grid>
      </Container>
    </Layout>
  );
}