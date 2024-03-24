import React from "react";

type Props = {
  style: "minimal" | "full";
};

const Logo = (props: Props) => {
  return (
    <div className="size-8 flex place-items-center">
      <h1 className="font-bold text-xl text-blue-600">
        {props.style === "minimal" ? "WB" : "Website Builder"}
      </h1>
    </div>
  );
};

export default Logo;
