import React, { Fragment } from 'react';

const Spacer = props => {
  let divArray = [];

  // Allows us to pass through a size for spacer
  for (let i = 0; divArray.length !== props.spacing; i++) {
    divArray.push(<div className="row" key={i}></div>);
    console.log(divArray);
  }

  const spacer = () => {
    return <Fragment>{divArray}</Fragment>;
  };

  return spacer();
};

export default Spacer;
