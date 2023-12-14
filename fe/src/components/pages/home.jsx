import React, { useEffect, useState } from "react";
import PostData from "../PostData";

// Importing images
import img1 from "../../img/1.jpg";
import img2 from "../../img/2.jpg";
import img3 from "../../img/3.jpg";
import img4 from "../../img/4.jpg";

function HomePage() {
    const [data, setData] = useState([]);

    useEffect(()=>{
      setData([
        {
          "name": "Yun",
          "surname": "Wi",
          "img": img4,
          "text": "I am selling this cup for only 30 dollars and you get another one for free.",
          "postImg": img4,
          "datePosted": "3w",
          "numOfComments": 1,
          "likes": ["123e", "g068vd", "43435", "434994", "90304b", "37", "69323id745"],
          "tags": ["pink", "motivation"],
          "comments": [
            {
              "name": "Katlego Me",
              "comment":
                "I need this cup man, I hope you can tell me where you got it.",
            },
          ],
        },
        {
          "name": "Katlego",
          "surname": "Me",
          "img": img1,
          "text": "Enjoying the best moments",
          "postImg": img1,
          "datePosted": "4h",
          "numOfComments": 0,
          "likes": [],
          "tags": ["mug", "pic", "katlego"],
          "comments": [
            {
              "name": "Josh talks",
              "comment": "When are you coming back Katlego?",
            },
            {
              "name": "Katlego Me",
              "comment": 'I"ll be back by the end of the year.',
            },
          ],
        },
        {
          "name": "Thabiso",
          "surname": "Malema",
          "img": img2,
          "text": "I am moving to a new apartment and buying new furniture!",
          "datePosted": "2d",
          "numOfComments": 2,
          "likes": ["123", "123"],
          "tags": ["plant", "content"],
          "comments": [],
        },
        {
          "name": "Drizzy",
          "surname": "Jane",
          "img": img3,
          "text": "Content creation is the future!",
          "datePosted": "3w",
          "numOfComments": 1,
          "likes": ["123", "123", "43435", "434994"],
          "tags": [],
          "comments": [],
        }
      ])
    },[])

    return(
            <>
              {data.length >= 1 && <PostData data={data} postsOnly={false} />}
            </>
    )
}

export default HomePage;

// DATA TO SAVE/STORE
// [
//   {
//     "name": "John",
//     "surname": "Doe",
//     "img": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg", 
//     "text": "McDonald is the best!!!",
//     "postImg": "https://images.pexels.com/photos/4109203/pexels-photo-4109203.jpeg",
//     "datePosted": "4h",
//     "numOfComments": 0,
//     "likes": [],
//     "tags": ["food", "snack", "contentcreator", "content", "ugc"],
//     "comments": [
//       {
//         "name": "Josh talks",
//         "comment": "MCDONALD is pure happiness",
//       },
//       {
//         "name": "Katlego Me",
//         "comment": "My favourite restaurant."
//       }
//     ]
//   },
//   {
//     "name": "Lioness",
//     "surname": "Catar",
//     "img": "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg",
//     "text": "Coca Cola brings a smile on my face everyday",
//     "postImg": "https://images.pexels.com/photos/2983100/pexels-photo-2983100.jpeg",
//     "datePosted": "4h",
//     "numOfComments": 0,
//     "likes": [],
//     "tags": ["drink", "contentcreator", "content"],
//     "comments": [
//       {
//         "name": "Josh talks",
//         "comment": "Definitely brings happiness"
//       }
//     ]
//   },
//   {
//     "name": "Katlego",
//     "surname": "Me",
//     "img": "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
//     "text": "Content creation is the future",
//     "postImg": "https://images.pexels.com/photos/6333749/pexels-photo-6333749.jpeg",
//     "datePosted": "4h",
//     "numOfComments": 0,
//     "likes": [],
//     "tags": ["pic", "contentcreator", "content", "ugc"],
//     "comments": []
//   },
//   {
//     "name": "Amy",
//     "surname": "Sapp",
//     "img": "https://images.pexels.com/photos/2218786/pexels-photo-2218786.jpeg",
//     "text": "This is what to cook as a veggiterian",
//     "postImg": "https://images.pexels.com/photos/8357245/pexels-photo-8357245.jpeg",
//     "datePosted": "4h",
//     "numOfComments": 0,
//     "likes": [],
//     "tags": ["cook", "contentcreator", "content", "food", "ugc"],
//     "comments": []
//   },
//   {
//     "name": "Jamie",
//     "surname": "Myers",
//     "img": "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg",
//     "text": "These shoes are super comfortable",
//     "postImg": "https://images.pexels.com/photos/19374318/pexels-photo-19374318/free-photo-of-nike-air-jordan-i-in-with-green-elements.jpeg",
//     "datePosted": "4h",
//     "numOfComments": 0,
//     "likes": [],
//     "tags": ["shoes", "contentcreator", "content", "fashion", "ugc"],
//     "comments": [
//       {
//         "name": "Josh talks",
//         "comment": "Those shoes look comfortable."
//       },
//       {
//         "name": "Katlego Me",
//         "comment": "Where did you buy the shoes?"
//       }
//     ]
//   },
//   {
//     "name": "Katlego",
//     "surname": "Me",
//     "img": "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
//     "text": "Food lovers",
//     "postImg": "https://images.pexels.com/photos/7669545/pexels-photo-7669545.jpeg",
//     "datePosted": "4h",
//     "numOfComments": 0,
//     "likes": [],
//     "tags": ["cook", "contentcreator", "content", "food"],
//     "comments": []
//   },
//   {
//     "name": "Lerato",
//     "surname": "Doe",
//     "img": "https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg",
//     "text": "This drink will keep you energized!",
//     "postImg": "https://images.pexels.com/photos/7676432/pexels-photo-7676432.jpeg",
//     "datePosted": "1h",
//     "numOfComments": 0,
//     "likes": [],
//     "tags": ["drink", "contentcreator", "content", "food", "ugc"],
//     "comments": []
//   },
//   {
//     "name": "Thabiso",
//     "surname": "Malema",
//     "img": "https://images.pexels.com/photos/2743754/pexels-photo-2743754.jpeg",
//     "text": "This is why I smell good everyday!",
//     "postImg": "https://images.pexels.com/photos/19251919/pexels-photo-19251919/free-photo-of-pastel-pink-perfume-bottle-on-a-white-silk.jpeg",
//     "datePosted": "2d",
//     "numOfComments": 2,
//     "likes": ["123", "123"],
//     "tags": ["plant", "content"],
//     "comments": []
//   },
//   {
//     "name": "Jane",
//     "surname": "Walker",
//     "img": "https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg",
//     "text": "Always smelling fresh",
//     "postImg": "https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg",
//     "datePosted": "3w",
//     "numOfComments": 1,
//     "likes": ["123", "123", "43435", "434994"],
//     "tags": ["perfume", "fragrance", "content", "contentcreation", "ugc", "fashion"],
//     "comments": []
//   },
//   {
//     "name": "Yun",
//     "surname": "Wi",
//     "img": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
//     "text": "How I start my morning everyday!",
//     "postImg": "https://images.pexels.com/photos/1437318/pexels-photo-1437318.jpeg",
//     "datePosted": "3w",
//     "numOfComments": 1,
//     "likes": ["123e", "g068vd", "43435", "434994", "90304b", "37", "69323id745"],
//     "tags": ["drink", "coffee", "content", "contentcreation", "ugc", "food"],
//     "comments": [
//       {
//         "name": "Katlego Me",
//         "comment":
//           "I need a cup of this"
//       }
//     ]
//   }
//   {
//     "name": "Yun",
//     "surname": "Wi",
//     "img": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
//     "text": "Iphone helps me make the best content!",
//     "postImg": "https://images.pexels.com/photos/1970139/pexels-photo-1970139.jpeg",
//     "datePosted": "3w",
//     "numOfComments": 1,
//     "likes": ["123e", "g068vd", "43435", "434994", "90304b",],
//     "tags": ["phone", "content", "contentcreation", "ugc"],
//     "comments": []
//   }
//   {
//     "name": "Sandra",
//     "surname": "Ugnius",
//     "img": "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg",
//     "text": "Interior Desgin is just art!",
//     "postImg": "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg",
//     "datePosted": "3w",
//     "numOfComments": 1,
//     "likes": ["123e", "g068vd", "43435", "434994", "90304b",],
//     "tags": ["design", "content", "contentcreation", "ugc"],
//     "comments": [
//       {
//         "name": "Katlego Me",
//         "comment":
//           "I need a cup of this"
//       }
//     ]
//   }
// ]