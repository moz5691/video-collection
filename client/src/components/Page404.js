import React from 'react';

const Page404=(props)=> {
  return (
    <div>
      <h2>Page 404 !!!</h2>
      <button onClick={()=>props.history.push('/')}>Go Home</button>
    </div>
  );
}

export default Page404;