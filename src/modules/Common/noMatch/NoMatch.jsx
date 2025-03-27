import { useEffect, useState } from "react";
import "./NoMatch.css"

const NoMatch = () => {
const numSet = 5;
const [countDown, setCountDown] = useState(numSet)

  useEffect(() => {
    if(countDown>0){
          setTimeout(() => {
          setCountDown(countDown-1)
      }, numSet*100);
    } else {
        window.location.href = "/Home";
    }
    }, [countDown]);



  return (
    <div className="container-noMatch">
      <p className="pOne">404</p>
      <p className="pTwo">Oops! Page not found</p>
      <p className="pThree">There's nothing here: redirect to page home ... {countDown}</p>
      <img src="./src/Img/Go.png" alt="go" />
    </div>
  );
};

export { NoMatch };
