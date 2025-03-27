import { useEffect } from "react";

const NoMatch = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/users";
    }, 3000);
  }, []);

  return (
    <div>
      <p>There's nothing here: 404! redirect to page home</p>
    </div>
  );
};

export { NoMatch };
