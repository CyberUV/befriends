import React, {useRef} from 'react'
import { Avatar } from '@mui/material';
import "./Post.css";



function Post({userName, imgURL, caption}) {

//   const strong = useRef(null);
// if(imgURL.length <= 1){
//   strong.current.style.display = "none";
// }

  return (
    <div className='post flex flex-column item-center justify-center mw6 ba mt4 shadow-5 br4'>
        <div className="imgTop pt3 pl3 flex items-center ">
            <Avatar 
            className='postAvatar'
            alt={userName}
            src='R' />

            <h4 className='ml2 text-left'>{userName}</h4>
            
        </div>
        <img src={imgURL}  className='postImg mw6 bt bb mt3 mb4 ' />
        <h4 className='pb3 pl3'><strong>{userName}   </strong> {caption}</h4>
    </div>
  )
}

export default Post