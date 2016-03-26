import React from 'react';

export default function ({ sortName, sortAge }) {
  return (
    <div>
      <button className="btn btn-default" onClick={sortName}>Sort by name</button>
      <button className="btn btn-default" onClick={sortAge}>Sort by age</button>
    </div>
  );
}
