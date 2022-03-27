import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCategories } from "../../Redux/categoriesReducer";


const Categories = () => {

  const categories = useSelector(state => getAllCategories(state))
  console.log(categories);
 

  return (
    <>
      <h2>Categories</h2>
      <h5 className="pt-3">
        {
           categories.map(category => (
            <ol key={category.id}><Link to={`/categories/${category.name}`}>{category.name}</Link></ol>
          ))
        }
      </h5>
    </>
  )
}

export default Categories;