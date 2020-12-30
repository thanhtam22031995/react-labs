import { Button, CardActions } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles({
  root: {},
  media: {
    height: 140,
  },
});

MediaCard.propTypes = {
  post: PropTypes.object,
  onClick: PropTypes.func,
  onRemove: PropTypes.func,
  onEdit: PropTypes.func,
};
MediaCard.PropTypesDefault = {
  post: {},
  onClick: null,
  onRemove: null,
  onEdit: null,
};

export default function MediaCard({ post, onClick, onRemove, onEdit }) {
  const { imageUrl, title, description } = post;
  const classes = useStyles();

  const handleClick = () => {
    if (onClick) onClick(post);
  };
  const handleRemoveButton = (e) => {
    e.stopPropagation();
    if (onRemove) onRemove(post);
  };
  const handleEditButton = (e) => {
    e.stopPropagation();
    if (onEdit) onEdit(post);
  };
  return (
    <div className="card">
      <Card onClick={handleClick} className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={imageUrl} title="Contemplative Reptile" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description.length <= 100 ? description : `${description.slice(0, 88)}...`}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={handleEditButton} variant="contained" size="small" color="primary">
            Edit
          </Button>
          <Button onClick={handleRemoveButton} variant="contained" size="small" color="primary">
            Remove
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
