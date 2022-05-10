import {useState,useEffect} from 'react'
import Post from "./Post"
import axios from "axios";
import { pixabayAPI } from "../config/data";

function Feed() {

  
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);
 
    const fetchPhotos = async () =>{
            setLoading(true);
                axios.get(`${pixabayAPI.url}?key=${pixabayAPI.key}&image_type=photo&per_page=50&safeSearch=false`)
               .then(res=>{

                // console.log(res.data.hits);   //Just to check the data
                
                setPhotos(res.data.hits);
                setLoading(false);
            }).catch((err) => console.log(err));
    };

     useEffect(()=>{
          fetchPhotos();            
     },[])

     if(loading) {
         return <div className="flex items-center justify-center text-2xl md:text-4xl mt-[200px] animate-bounce">
             Loading .....
         </div>
     }

  return (
    <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto' >
    {/*Secton */}
    <section className="col-span-2">

      {/*Posts */}

       <Post />       

    

    </section>
                 
  
    </main>

  )
}

export default Feed