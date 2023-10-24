import Image from "next/image";
import parfun1 from "@/font/parfums1.jpg";
import parfun2 from "@/font/parfums2.jpg";
import parfun3 from "@/font/parfums3.jpg";
import { Metadata } from "next";
import { Fragment } from "react";
import {AxiosResponse} from "axios"
import request from "@/server";
import axios from "axios"
import CategoryType from "@/types/category";
import CategoryCard from "@/components/card/CategoryCard";


export const metadata: Metadata = {
  title: "Home",
  description: "E-commerce website forever",
};


 const Home = async() => {
  try{
 const { data } = await request.get<CategoryType[]>("category");
  return (<Fragment>

    <section>
      {/* <h1 className="texte">Latest products</h1> */}
      </section>
      <section>
        {/* <h1 className="Texte">Categories</h1> */}
         <div className="container">
          {data.map((category) => (
            <CategoryCard key={category._id} {...category} />
            ))}
       </div>
      </section>
    </Fragment> );

  }catch (err){
    throw new Error("Error")
  } 
 
}
export default Home;

{/* <div className="container">
  <div className="card">
  <Image className="part" src={parfun1} alt="F"/>
    <button className="btn-icon">Coco-Dior</button>
  </div>
  <div className="card">
  <Image className="part" src={parfun2} alt="F"/>
    <button className="btn-icon">Shanel</button>
  </div>
  <div className="card">
  <Image className="part" src={parfun3} alt="F"/>
    <button className="btn-icon">Sarkior</button>
  </div>
  <div className="card">
  <Image className="part" src={parfun3} alt="F"/>
    <button className="btn-icon">Coco-Dior</button>
  </div>
  <div className="card">
  <Image className="part" src={parfun1} alt="F"/>
    <button className="btn-icon">Shanelr</button>
  </div>
  <div className="card">
  <Image className="part" src={parfun1} alt="F"/>
    <button className="btn-icon">Sarkior</button>
  </div>
</div> */}
