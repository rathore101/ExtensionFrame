import React from "react";
import {
  conisImage,
  ledgerStartImage,
  productImage,
  supportImage,
} from "../AllData";
import {
  conisImageLink,
  ledgerStartImageLink,
  productImageLink,
  supportImageLink,
} from "../AllData";
function Footer() {
  const data = [
    { link: conisImageLink, img: conisImage, label: "LedgerPlayStore" },
    {
      link: ledgerStartImageLink,
      img: supportImage,
      label: "LedgerCoins",
    },
    {
      link: productImageLink,
      img: productImage,
      label: "LedgerProduct",
    },
    {
      link: supportImageLink,
      img: supportImage,
      label: "LedgerSupport",
    },
    {
      link: supportImageLink,
      img: supportImage,
      label: "LedgerSupport",
    },
  ];
  return (
    <div className="iaisux w-full flex items-center p-4 justify-between bg-black text-white">
      {data?.map(({ link, img, label }, index) => (
        <div
          key={index}
          className="box flex items-center justify-between bg-[#1c1d1f] rounded-md p-3 transition-all"
        >
          <a href={link} target="_blank">
            <div className="flex justify-center items-center">
              <img
                src={img}
                alt="icon"
                className=" flex justify-center items-center size-10 mb-2"
              />
            </div>
            <div className="text-lg font-bold ">
              {chrome.i18n.getMessage(label)}
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Footer;
