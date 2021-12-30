import React from 'react';

function NewPost() {
  return (
    <div className="new-post">
      <img src="/img/flag.png" alt="flag" />

      <div className="new-post__elem">
        <img src="/img/hand-img.png" alt="hand" style={{width: "100%"}} />

        <div className="new-post__article">
          <p className="article-date">Feb 23 · 8 min read</p>
          <p className="new-post__article-header">Tips & Tricks For Cutting</p>
          <p>Pruning, like any other skill, requires knowing what you are doing to achieve success. The old idea
            that anyone with a chain saw or a pruning saw can be a landscape pruner is far from the truth. More
            trees are killed or ruined each year from improper pruning than by pests. Remember that pruning is
            the removal or...</p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default NewPost;