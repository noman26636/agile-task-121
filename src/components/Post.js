import { BookmarkIcon, ChatIcon,DotsHorizontalIcon,
    EmojiHappyIcon,HeartIcon,PaperAirplaneIcon} from '@heroicons/react/outline'
import { useEffect } from 'react';

function Post() {
     
  return (
    <div className="bg-white my-8 border rounded-sm">
    {/*Header*/}
    
        <div className="flex items-center p-5">
        <img className="rounded-full h-12 w-12 object-contain border p-1 mr-3" src="" alt="" />
        <p className="flex-1 font-bold">noman2</p>
        <DotsHorizontalIcon className="h-5" />
    </div>
        {/*Image*/}

        <img src="" className="object-cover w-full" alt=""/>

{/*Buttons*/}

      <div className='flex justify-between px-4 pt-4'>
      <div className="flex space-x-4 ">
          <HeartIcon className="btn" />
          <ChatIcon className="btn"/>
          <PaperAirplaneIcon className="btn rotate-45" /> 
      </div>
      <BookmarkIcon className="btn"/>
      </div>

  {/*Captions*/}

   <p className="p-5 truncate">
        <span className="font-bold mr-1">noman2</span>
        hello
   </p>


{/*Input Box*/}


  <form className="flex items-center p-4">
  <EmojiHappyIcon className="h-7 mr-5" />
  <input type="text"
  placeholder="Add a comment..." 
  className="border-none flex-1 focus:ring-0 outline-none mr-4" 
  />
  <button 
  type="submit" 
  className="font-semibold text-blue-400">Post</button>
  </form>


</div>
  )};
    
export default Post