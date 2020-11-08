import React, { lazy } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";

const importView = (id, type) =>
  lazy(() =>
    import(`../../${type}/${id}`).catch(() => import("../../atoms/container"))
  );

function Content(props) {
  const { id, type } = useParams();
  const Component = importView(id, type);
  return (
    <div className="px3">
      <h1>{id}</h1>
      <React.Suspense fallback="Loading page...">
        <div className="fixed-container">
          <Component />
        </div>
      </React.Suspense>
    </div>
  );
}

export default Content;
