import { Card, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { getPostById } from '../../Redux/postsRedux'
import { Link } from 'react-router-dom'
import dateToStr from '../../utils/dateToStr'

const PostCard = ({ id }) => {

  const postDate = useSelector(state => getPostById(state, id))
  console.log(postDate);

  return (
    <Card style={{ width: '15rem' }} className="text-center"  border="info">
      <Card.Body>
        <Card.Title className="mb-3 fw-bold">{postDate.title}</Card.Title>

        <Card.Subtitle className="mt-2"><span className="fw-bold">Author: </span>{postDate.author}</Card.Subtitle>

        <Card.Subtitle className="mt-2"><span className="fw-bold">Published: </span>{dateToStr(postDate.publishedDate)}</Card.Subtitle>

        <Card.Text className="mt-2"><span className="fw-bold">Category: </span>{postDate.category}</Card.Text>

        <Card.Text className="mt-2">{postDate.shortDescription}</Card.Text>
        
        <Link className="mt-auto" to={`/post/${postDate.id}`}>
          <Button variant="primary">Read more</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default PostCard;