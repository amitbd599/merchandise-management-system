import React, { Fragment } from "react";

const MasterLayout = (props) => {
  return (
    <Fragment>
      <nav></nav>

      <div className="content">{props.children}</div>
    </Fragment>
  );
};

export default MasterLayout;
