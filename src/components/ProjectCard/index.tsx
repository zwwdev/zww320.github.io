import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, Button, CardActionArea, CardActions } from '@mui/material';

export interface ProjectCardProps {
  image?: string;
  title: string;
  info: string;
  githubUrl: string;
  deploymentUrl?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, info, githubUrl, deploymentUrl }) => {
  return (
    <Grid item xs={12} m={6}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="Screenshot of the project"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {info}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={() => window.open(githubUrl)}>
            Source Code
          </Button>
          <Button size="small" color="primary" onClick={() => window.open(deploymentUrl)}>
            Deployment
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
