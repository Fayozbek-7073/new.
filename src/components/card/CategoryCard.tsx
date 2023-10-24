
import CategoryType from "@/types/category";
import Image from "next/image";
import Link from "next/link";
const CategoryCard = ( {name, image , _id}:CategoryType) => {
  return (
        <div className="card">
        <Image className="part" src= {image.url} alt={name} width={200} height={400}/>
          <Link href={`/categories/${_id}`}><button className="btn-icon">{name}</button></Link>
          
      </div>
  )
}

export default CategoryCard;
