import React, { useState } from 'react'

const Like = () => {
    const [Like,setLike] = useState(0);
    const [Dislike,setDislike] = useState(0);

    const handleLike=()=>{
         setLike(Like+1);
    }
    const handleDislike=()=>{
        setDislike(Dislike+1);
    }
  return (
    <div>
      <button onClick={handleLike}>Like</button>
      <span>{Like}</span>
      <button onClick={handleDislike}>Dislike</button>
      <span>{Dislike}</span>
    </div>
  )
}

export default Like;
