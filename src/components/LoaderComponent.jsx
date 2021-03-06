import React from 'react'
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function LoaderComponent({classes}) {
  return (
    <div className={classes.join(' ')}>
      <Loader
        type="TailSpin"
        color="#00BFFF"
        height={100}
        width={100}
      />
    </div>
  )
}

export default LoaderComponent
