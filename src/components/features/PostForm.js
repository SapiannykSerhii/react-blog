import { useState } from "react"
import { Form,Button } from "react-bootstrap"
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css';
import React from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from "react-hook-form"
import { useSelector } from "react-redux";
import { getAllCategories } from "../../Redux/categoriesReducer";


function PostForm({ action, actionText, ...props }) {

  const { register, handleSubmit: validate, formState: {errors} } = useForm();

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(
    props.publishedDate || new Date());
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent ] = useState(props.content || '');
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);
  
  const [category, setCategory] = useState(props.category || '')
 
  
  const categories = useSelector(state => getAllCategories(state))
  // console.log(categories);

  const hundleSubmit = () => {
    setContentError(!content)
    setDateError(!publishedDate)
    if(content && publishedDate) {
      action({ title, author, publishedDate, shortDescription, content, category });
    }
  };

  return (
    <Form onSubmit={validate(hundleSubmit)}>

      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control 
          {...register("title", {required: true, minLength: 3} )}
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={e => setTitle(e.target.value)} />
          {errors.title && <small className="d-block form-text text-danger mt-2">This field is required(min is 3)</small>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control 
          {...register("author", {required: true, minLength: 3} )}
          type="text"
          placeholder="Enter author"
          value={author}
          onChange={e => setAuthor(e.target.value)} />
           {errors.title && <small className="d-block form-text text-danger mt-2">This field is required(min is 3)</small>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPublishedDate">
        <Form.Label>Published</Form.Label>

        <DatePicker
            selected={publishedDate}
            onChange={(date) => setPublishedDate(date)}
          />
          {dateError && <small className="d-block from-text text-danger mt-2">Date can't be empty</small>}
      </Form.Group>

      <Form.Select onChange={(event) => setCategory(event.target.value)} value={category}>
            {categories.map(category =>
              (<option key={category.id}
                  value={category.name}>
                  {category.name}
              </option>
              ))
            }
    </ Form.Select>

      <Form.Group className="mb-3" controlId="formShordDescription">
        <Form.Label>Short description</Form.Label>
        <Form.Control 
          {...register("short description", {required: true, minLength: 20} )}
          as="textarea"
          rows={6}
          placeholder="Enter description"
          value={shortDescription}
          onChange={e => setShortDescription(e.target.value)} />
           {errors.title && <small className="d-block form-text text-danger mt-2">This field is required(min is 20)</small>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContent">
        <Form.Label>Main content</Form.Label>

        <ReactQuill theme="snow" value={content} onChange={setContent} placeholder="Enter content"/>
        {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
      </Form.Group>
      


      <Button variant="primary" type="submit">
        Add Post
      </Button>

    </Form>

  );
}

export default PostForm