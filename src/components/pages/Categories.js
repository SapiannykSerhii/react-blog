import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCategories } from "../../Redux/categoriesReducer";


const Categories = () => {

  const categories = useSelector(state => getAllCategories(state))
  console.log(categories);

  return (
    <>
      <h2>Categories</h2>
      <ul>
        {
           categories.map(category => (
            <li key={category.id}><Link to={`/categories/${category.name}`}>{category.name}</Link></li>
          ))
        }
      </ul>
    </>
  )
}

export default Categories;