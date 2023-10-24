import CategoryType from "./category"
import ImageType from "./image"

interface PradactTyupe{

        "checked": boolean,
        "sold": number,
        "_id": string,
        "title": string,
        "price": number
        "description": string,
        "image": ImageType,
        "quantity": number,
        "category": CategoryType,
        "createdAt": string,
        "updatedAt": string,
        "__v": 0;
}
 export default PradactTyupe;
