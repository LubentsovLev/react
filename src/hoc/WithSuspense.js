import React from "react";
import Preloader from "../components/common/preloader/preloader";

export const WithSuspense = (Component) => {
  return (props) => {
    return (
      <React.Suspense fallback={<Preloader />}>
        <Component {...props} />
      </React.Suspense>
    );
  };
};
