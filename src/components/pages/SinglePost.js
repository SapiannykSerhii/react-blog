import { useState } from "react"
import { Button, Col, Modal, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, Navigate, useParams } from "react-router-dom"
import { getPostById, removePost } from "../../Redux/postsRedux"
import { dateToStr } from "../../utils/dateToStr"


const SinglePost = () => {
  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id))
  console.log(postData);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const dispatch = useDispatch()

  const remove = () => {
    dispatch( removePost (postData.id))
  }


  if(!postData) return <Navigate to="/"/>
  return (
    <>
    <article >
      <Row className="d-flex justify-content-between">
        <Col className="fw-bold">
          <h2>{postData.title}</h2>
        </Col>
        <Col>
        <Link key={postData.id} to={`/post/edit/${postData.id}`}>
          <Button variant="outline-info" className="m-3 ">Edit</Button>
        </Link>
          <Button variant="outline-danger" onClick={handleShow}>Delete</Button>
        </Col>
      </Row>
      <p><span className="fw-bold">Author: </span>{postData.author}</p>
      <p><span className="fw-bold">Published: </span>{dateToStr(postData.publishedDate)}</p>
      <p><span className="fw-bold">Category: </span>{postData.category}</p>
      <br/>
      <div>
        <p dangerouslySetInnerHTML={{ __html: postData.content }} />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This operation will completely remove the post. Are you sure you want to do that?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="danger" onClick={ () => { handleClose(); remove() } }>Remove</Button>
        </Modal.Footer>
      </Modal>
    </article>
    </>
  )
}

export default SinglePost