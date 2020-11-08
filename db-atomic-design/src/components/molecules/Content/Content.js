import React, { lazy } from "react";
import { useParams } from "react-router-dom";
import "./Content.css";

const importView = (id, type) =>
  lazy(() =>
    import(`../../../components/${type}/${id}/${id}`).catch(() =>
      import("../MainContent/MainContent")
    )
  );

function Content(props) {
  const { id, type } = useParams();
  console.log(id, type);
  const Component = importView(id, type);
  return (
    <div className="px3">
      <h1>{id}</h1>
      <React.Suspense fallback="Loading charts...">
        <div className="fixed-container">
          <Component />
        </div>
      </React.Suspense>
    </div>
  );
}

export default Content;
