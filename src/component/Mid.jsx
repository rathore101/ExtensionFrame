import React from "react";
import {
  androidImage,
  compareImage,
  desktopImage,
  iosImage,
  liveImage,
  macImage,
  bannerImage,
} from "../AllData";
import {
  androidImageLink,
  compareImageLink,
  desktopImageLink,
  iosImageLink,
  liveImageLink,
  macImageLink,
} from "../AllData";
function Mid() {
  const linksData = [
    { link: androidImageLink, img: compareImage, label: "LedgerAndroid" },
    { link: compareImageLink, img: compareImage, label: "LedgerWallet" },
    { link: desktopImageLink, img: compareImage, label: "LedgerDektop" },
  ];
  const linksData2 = [
    { links: iosImageLink, img: compareImage, label: "LedgerApple" },
    { link: liveImageLink, img: liveImage, label: "LedgerLive" },
    { link: macImageLink, img: compareImage, label: "LedgerMac" },
  ];

  return (
    <div className=" w-full bg-black px-3 py-2 text-white ">
      <div className="">
        <div className="flex justify-between items-center ">
          {linksData?.map(({ link, img, label }, index) => (
            <div key={index}>
              <a href={link} target="_blank">
                <img src={img} alt="icon" className="size-8 " />
                <div className="text-md font-bold ">
                  {chrome.i18n.getMessage(label)}
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="border rounded-full w-auto h-32 flex justify-center items-center mt-20 ">
          <img src={bannerImage} alt="icon" className="h-[345px]" />
        </div>
        <div className="flex justify-between items-center ">
          {linksData2?.map(({ link, img, label }, index) => (
            <div key={index}>
              <a href={link} target="_blank">
                <img src={img} alt="icon" className="size-8 " />
                <div className="text-md font-bold ">
                  {chrome.i18n.getMessage(label)}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mid;
{
  /* <div className="w-full flex flex-wrap justify-between">
        {linksData.map(({ link, img, label }, index) => (
          <div
            key={index}
            className="box flex items-center justify-between  rounded-md p-3 transition-all"
          >
            <a
              href={link}
              target="_blank"
              className=" flex flex-col justify-center items-center"
            >
              <img
                src={img}
                alt="icon"
                className=" flex justify-center rounded-full bg-[#1c1d1f] items-center text-center size-12 p-2 mb-2 "
              />
              <div className="text-md font-bold inline-block">
                {chrome.i18n.getMessage(label)}
              </div>
            </a>
          </div>
        ))}
      </div> */
}
