import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addPost } from "../../Redux/postsRedux"
import PostForm from "./PostForm"

const AddPostForm = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const hundleSubmit = post => {
    dispatch( addPost ( post ) )
    navigate("/")
  }


  return (
    <PostForm action={hundleSubmit} actionText="Add post" />
  )
}

export default AddPostForm