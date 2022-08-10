import { Spinner } from "@chakra-ui/react";
import "./Loading.css";

function Loading({ height = "10vh" }) {
  return (
    <div
      className="loading-indicator"
      style={{
        height: height,
      }}
    >
      <Spinner />
    </div>
  );
}

export default Loading;
