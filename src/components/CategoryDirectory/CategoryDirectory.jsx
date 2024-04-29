import CategoryItem   from "../CategoryItem/CategoryItem"
import './categoryDirectory.styles.scss'

export const CategoryDirectory = ({categories}) => {

      return (
        <>
          <div className='categories-container'>
            {categories.map(category => (
           <CategoryItem category={category} key={category.id}/>
            ))}
          </div>
        </>
      )
    }


    export default CategoryDirectory;