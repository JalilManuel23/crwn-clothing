import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
    return(
        categories.map(({ title, id, imageUrl }) => (
            <CategoryItem 
              title={ title } 
              imageUrl={ imageUrl }  
              key={ id }
            />
        ))
    )
}

export default Directory;