import React from 'react';
import Layout from '@theme/Layout';
import { ProjectCard } from '../components/ProjectCard';
import typeupImage from '../../static/projectsImages/typeup.png';
import { Grid } from '@mui/material';


export default function Projects() {
  return (
    <Layout title="Projects" description="Projects Gallery">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
          <ProjectCard 
              image={typeupImage}
              title="Type-Up"
              info="Type-Up is an online typing practice platform for non-native English speakers to help them enhance English vocabulary and type faster in English at the same time"
              githubUrl="https://github.com/zwwang98/type-up"
              deploymentUrl="https://main.d3pddxrrd2k8h3.amplifyapp.com/"
          />
          <ProjectCard 
              image={typeupImage}
              title="Type-Up"
              info="Type-Up is an online typing practice platform for non-native English speakers to help them enhance English vocabulary and type faster in English at the same time"
              githubUrl="https://github.com/zwwang98/type-up"
              deploymentUrl="https://main.d3pddxrrd2k8h3.amplifyapp.com/"
          />
          <ProjectCard 
              image={typeupImage}
              title="Type-Up"
              info="Type-Up is an online typing practice platform for non-native English speakers to help them enhance English vocabulary and type faster in English at the same time"
              githubUrl="https://github.com/zwwang98/type-up"
              deploymentUrl="https://main.d3pddxrrd2k8h3.amplifyapp.com/"
          />
      </div>
    </Layout>
  );
}