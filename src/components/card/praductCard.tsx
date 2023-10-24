

import PradactTyupe from "@/types/praduct";
import Image from "next/image";
import Link from "next/link";

const praductCard = ( {title, image , price, _id}:PradactTyupe) => {
  return (
        <div className="card card-pradact">
        <Image className="part" src= {image.url} alt={title} width={200} height={400}/>
        <span>{price}</span>
        <Link href={`/categories/${_id}`}><button className="btn-icon">{title}</button></Link>
          
      </div>
  )
}

export default praductCard;
