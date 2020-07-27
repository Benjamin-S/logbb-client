import React from 'react';

const BabyList = (props) => {
  if (!props.babies) {
    return <div className="article-preview">Loading...</div>;
  }

  if (props.babies.length === 0) {
    return <div className="article-preview">No babies are here... yet.</div>;
  }

  return (
    <div>
      {props.babies.map((baby) => {
        return <h2>{baby.name}</h2>;
      })}
    </div>
  );
};

export default BabyList;
