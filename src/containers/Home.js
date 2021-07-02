import React, { Suspense } from "react";

const Menu = React.lazy(() => import("./menu"));
const Carousel = React.lazy(() => import("./carousel"));

export default function Home() {
  return (
    <div>
      <Suspense fallback={<div>...Loading</div>}>
        <Carousel />
        <Menu />
      </Suspense>
    </div>
  );
}
