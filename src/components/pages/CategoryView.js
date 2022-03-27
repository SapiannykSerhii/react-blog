
import { Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getFilteredPosts } from '../../Redux/postsRedux'
import PostCard from '../views/PostCard'


const CategoryView = () => {

  const {categoryName}   = useParams();

  const posts = useSelector(state => getFilteredPosts(state, categoryName))
  // console.log(posts);

  return (
    <Row className="mt-2">
      {
        posts.map(post => (
          <Col key={post.id} >
            <PostCard id={post.id}/>
          </Col>
        ))
      }
    </Row>
  );
}

export default CategoryView;