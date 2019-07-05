import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import './App.css';

const useStyles = makeStyles(
  createStyles({
    card: {
      margin: 10,
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  }),
);

const Item: React.FC<{item: any}> = (props) => {
  const classes = useStyles();

  const handleEdit = () => {
    // axios.get();
  };
  const handleDelete = () => {
    // axios.post();
  };

  return (<Card>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={props.item.thumbnailUrl}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          AlbumId: {props.item.albumId} | Id: {props.item.id}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.item.title}
        </Typography>
        <Typography color="textSecondary">
          Url: {props.item.url}
        </Typography>
        <Typography color="textSecondary">
          ThumbnailUrl: {props.item.thumbnailUrl}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" onClick={handleEdit}>Edit</Button>
      <Button size="small" variant="contained" color="secondary" onClick={handleDelete}>Delete</Button>
    </CardActions>
  </Card>);
};

const ItemList: React.FC<{className?: string}> = (props) => {
  const [items, setItems] = useState([]);

  const classes = useStyles();

  axios.get('https://jsonplaceholder.typicode.com/photos')
  .then(response => setItems(response.data.slice(0, 10)))
  return (<div className={props.className}>{items ? items.map((item: any) => <div className={classes.card} key={item.albumId + '-' + item.id} ><Item item={item}></Item></div>) : 'No Items'}</div>);
};

const App: React.FC = () => {
  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        CD and DVD rental
      </Typography>
      <ItemList></ItemList>
    </Container>
  );
}

export default App;
