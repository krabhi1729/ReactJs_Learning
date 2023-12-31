import {useRouteError} from "react-router-dom";

const Error = () => {
  const err= useRouteError();
  console.log(err);
  const {status,statusText,data}=err;
  return (
    <div>
      <h1>Oops!!</h1>
      <h2>Something went wrong</h2>
      <h2>{status+":"+statusText+"{"+data+"}"}</h2>
    </div>
  )
}

export default Error;

