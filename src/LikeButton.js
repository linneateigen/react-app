import React, { useState } from 'react';

function LikeButton() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count} likes</p>
      <button onClick={() => setCount(count + 1)}>
        Like
      </button>
    </div>
  );
}
export default LikeButton;
