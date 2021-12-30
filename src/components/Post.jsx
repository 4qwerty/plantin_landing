import React from 'react';

function Post({image, date, header, text}) {
  return (
    <div className="post main-posts">
      <img src={image} alt={header} style={{width: "100%"}} />
      <p className="article-date">{date}</p>
      <p className="article-header">{header}</p>
      <p>{text}</p>
    </div>
  );
}

export default Post;