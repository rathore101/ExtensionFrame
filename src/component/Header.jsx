import React from "react";
import { bannerImage } from "../AllData";

export default function Header() {
  return (
    <div className="w-full">
      <div>
        <img
          src={` ${bannerImage}`}
          alt="bannerImage"
          className="xkxjsi w-full h-56"
        />
      </div>
    </div>
  );
}
