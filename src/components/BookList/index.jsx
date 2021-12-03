import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const BookList = ({ books, loading, error }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>

  return (
    <div data-test='book-list'>
      <Grid container spacing={3}>
        {
          books.map(({ name, id }) => (
            <Grid item xs={4} sm={4} key={id} className="book-item">
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography className='title' gutterBottom variant='h5' component='h2'>
                      {name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size='small' color='primary'>
                    <Link to={`/books/${id}`}>View Details</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </div>
  )
}

export default BookList;
