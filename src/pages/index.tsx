import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import {Button, IconButton, Typography} from '@mui/material';
import { GitHub, LinkedIn, MailOutline } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';

const hstyle = {color: '#2196f3'};

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header>
      <div className="container">
        <h1 className="hero__title">Hello! I am <span style={ hstyle }>{siteConfig.title}</span></h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <IconButton href="https://github.com/zwwang98">
          <GitHub />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/zwwang/">
          <LinkedIn />
        </IconButton>
        <IconButton href="mailto:ziweiwang630@gmail.com">
          <EmailIcon />
        </IconButton>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </Layout>
  );
}
