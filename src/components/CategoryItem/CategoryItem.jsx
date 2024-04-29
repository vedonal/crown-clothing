import './categoryItem.style.scss';


const CategoryItem = ({category}) => {

    return (
      <a href="#" className='category-link'>
        <div key={category.id} className='category-item-wrapper'>
          <div className='category-background-image' style={{backgroundImage: `url(${category.imgURL})`}}>
          <div className='category-overly'></div>
          <h3 className='category-title'>{category.title}</h3>
          </div>
      </div>
      </a>
    )
}

export default CategoryItem;