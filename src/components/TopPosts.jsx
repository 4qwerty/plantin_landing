import React from 'react';

function TopPosts() {
  return (
    <div className="top-posts">
      <p className="block-header">TOP of the Day</p>

      <div className="top-posts__body">
        <div className="post">
          <img src="/img/lamp-img.png" alt="lamp" style={{width: "100%"}} />
          <p className="article-date">Feb 23 · 8 min read</p>
          <p className="article-header">Professional Repot</p>
          <p>Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can
            damage...</p>
        </div>

        <div className="post-adapt">
          <img src="/img/sprout-img.png" alt="sprout" style={{width: "100%"}} />
          <p className="article-date">Feb 23 · 8 min read</p>
          <p className="article-header">Professional Repot</p>
          <p>Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can
            damage...</p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default TopPosts;