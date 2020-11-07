import React, { lazy } from "react";
import { useParams } from "react-router-dom";
import "./Content.css";

const importView = (componentName) =>
  lazy(() =>
    import(`../${componentName}/${componentName}`).catch(() =>
      import("../MainContent/MainContent")
    )
  );

function Content(props) {
  const data = useParams();
  const Component = importView(data.id);
  console.log(Component);
  return (
    <div className="px3">
      <h1>{data.id}</h1>
      <React.Suspense fallback="Loading charts...">
        <div className="fixed-container">
          This is the content
          <Component />
        </div>
      </React.Suspense>
    </div>
  );
}

export default Content;
