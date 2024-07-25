import { useEffect, useState } from "react";

export const DisplayScreenResolution = () => {
  const [screenResolution, setScreenResolution] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const handleResize = () => {
    setScreenResolution({
      height: window.innerHeight,
      width: window.innerWidth,
    });
    console.log("Handle called");
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div>
        <span>
          {screenResolution.height}
          {" px "}
        </span>
        <span>{" X "}</span>
        <span>
          {screenResolution.width} {" px "}
        </span>
      </div>
    </>
  );
};
