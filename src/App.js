import React, { Suspense, lazy } from "react";
import "./App.css";
import { Player } from "@lottiefiles/react-lottie-player";
const LazyLayout = lazy(() => import("./Components/Layout/Layout"));
function App() {
  return (
    <div className="App">
      <Suspense
        fallback={
          <div className="Loader">
            <Player
              src={
                "https://assets10.lottiefiles.com/packages/lf20_s5tFhoBEWg.json"
              }
              background="transparent"
              speed="1"
              style={{ width: "400px", height: "400px" }}
              loop
              autoplay
            />
          </div>
        }
      >
        <LazyLayout />
      </Suspense>
    </div>
  );
}

export default App;
