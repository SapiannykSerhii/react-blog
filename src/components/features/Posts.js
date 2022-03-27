import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getAllPosts } from "../../Redux/postsRedux"
import { Button, Card,  Col, Row} from "react-bootstrap"
import { dateToStr } from "../../utils/dateToStr"

const Posts = () => {
  const posts = useSelector(state => getAllPosts(state)) 
  // console.log(posts);
  
  
  return (
    <section>
      <div  className="d-flex justify-content-between">
        <h2>All posts</h2>
        <Link className="mt-2" to={"/post/add"}>
        <Button variant="outline-primary">Add post</Button>
        </Link>
      </div>
    <Row className="mt-5">
     {
        posts.map( post => ( 
          <Col key={post.id} >
            <Card style={{ width: '15rem' }} className="text-center"  border="info">
              <Card.Body>
                <Card.Title className="mb-3 fw-bold">{post.title}</Card.Title>

                <Card.Subtitle className="mt-2"><span className="fw-bold">Author: </span>{post.author}</Card.Subtitle>

                <Card.Subtitle className="mt-2"><span className="fw-bold">Published: </span>{dateToStr(post.publishedDate)}</Card.Subtitle>

                <Card.Text className="mt-2"><span className="fw-bold">Category: </span>{post.category}</Card.Text>

                <Card.Text className="mt-2">{post.shortDescription}</Card.Text>

                <Link className="mt-auto" to={`/post/${post.id}`} key={post.id}>
                  <Button variant="primary">Read more</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))
      }  
    
        </Row>
    </section>
  )
} 
   

export default Posts