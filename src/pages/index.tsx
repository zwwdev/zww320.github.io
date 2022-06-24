import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import {Button, Container, IconButton, Typography} from '@mui/material';
import { GitHub, LinkedIn, MailOutline } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Tooltip from '@mui/material/Tooltip';

const hstyle = {color: '#2196f3'};

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  const iconButtonInfo = [
    {
      icon: <GitHub/>,
      title: "GitHub",
      link: "https://github.com/zwwang98"
    },
    {
      icon: <LinkedIn/>,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/zwwang/"
    },
    {
      icon: <EmailIcon/>,
      title: "Email",
      link: "mailto:ziweiwang630@gmail.com"
    },
    {
      icon: <InsertDriveFileIcon/>,
      title: "Resume",
      link: "https://drive.google.com/file/d/1tatRyjrzkt5TYCV-Q2wKa16UUm3CruQb/view"
    },
  ];

  const iconItms = iconButtonInfo.map(info =>
      <Tooltip title={info.title}>
        <IconButton onClick={()=>window.open(`${info.link}`)}>
          {info.icon}
        </IconButton>
      </Tooltip>
  );

  return (
    <header>
      <div className="place-holder" ></div>
      <div className="container" >
        <Container sx={{mt: 15}}></Container>
        <h1 className="hero__title" >Hello! I am <span style={ hstyle }>{siteConfig.title}</span></h1>
        <p className="hero__subtitle">
          <span>
            A Northeastern University student studying Computer Science 
          </span>
          <br></br>
          <span>
            Passionate for distributed system and web development
          </span> 
        </p>
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        {iconItms}
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
