import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Card,Button} from 'react-bootstrap';



function Post({z}) {
  const [comment, setComment] = useState();
  const [error, setError] = useState(null);
  useEffect(() => {
    axios

      .get(`https://jsonplaceholder.typicode.com/comments?postId=${z.id}`)
      .then((res) => setComment(res.data))
      .catch((err) => setError(err));
  }, []);
  return <div>
         <Card style={{  width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>{z.title}</Card.Title>
    <Card.Text>
      {z.body}
    </Card.Text>
    <Card.Text>
    {error ? (
        <p>not yet !! </p>
      ) : (
        comment && comment.map((el) => <ul><li >{el.name}</li></ul> )
      )}
    </Card.Text>
    <Button variant="primary">Comment's</Button>
  </Card.Body>
</Card>

  </div>;
}

export default Post;

