import request from "@/server";
import CategoryType from "@/types/category";
import Params from "@/types/paramsdaynamik";
import Image from "next/image";
import Loading from '../../../loading';


const CategoryPage =  async  ({params} :Params) => {

    const {data} = await request.get<CategoryType>(
        `category/${params.categoryId}`
    )
    console.log(data);
    
  return (
    <div className="categoryPagez">
      <div className="boxsz">
        
          <Image
            src={`${data.image.url}`}
            width={500}
            height={500}
            alt="Picture of the author"
            />
      </div> 
       <div className="categoryes">
         <h1>{data.name}</h1>
       </div>
    </div>
  )
}

export default CategoryPage;


