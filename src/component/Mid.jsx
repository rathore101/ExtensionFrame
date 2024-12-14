import React from "react";
import {
  androidImage,
  compareImage,
  desktopImage,
  iosImage,
  liveImage,
  macImage,
  conisImage,
  ledgerStartImage,
  productImage,
  supportImage,
} from "../AllData";
import {
  androidImageLink,
  compareImageLink,
  desktopImageLink,
  iosImageLink,
  liveImageLink,
  macImageLink,
  conisImageLink,
  ledgerStartImageLink,
  productImageLink,
  supportImageLink,
} from "../AllData";
function Mid() {
  return (
    <div className=" w-full bg-[#775d8c] px-3 py-2 text-white flex flex-row gap-3">
      <div className="w-full">
        <div className="h-32 flex w-full mb-2 gap-3">
          <div className=" bg-[#cd6a65] p-3 w-full rounded-2xl">
            <a href={`${androidImageLink}`}>
              <div className="flex justify-center items-center mb-2">
                <img src={androidImage} alt="icon" className="size-16" />
              </div>
              <div className="text-lg font-bold">
                {chrome.i18n.getMessage("LedgerAndroid")}
              </div>
            </a>
          </div>
          <div className=" bg-[#378c77] p-3 w-full rounded-2xl">
            <a href={`${compareImageLink}`}>
              <div className="flex justify-center items-center mb-2">
                <img src={compareImage} alt="icon" className="size-16" />
              </div>
              <div className="text-lg font-bold">
                {chrome.i18n.getMessage("LedgerWallet")}
              </div>
            </a>
          </div>
        </div>
        <div className=" bg-[#d38135] h-68 p-4 rounded-2xl flex flex-col gap-3 w-full ">
          <div className=" flex justify-between mb-3">
            <a href={`${desktopImageLink}`}>
              <div className="flex justify-center items-center">
                <img src={desktopImage} alt="icon" className="size-16 mb-2" />
              </div>
              <div className="text-lg font-bold">
                {chrome.i18n.getMessage("LedgerDektop")}
              </div>
            </a>
            <a href={`${iosImageLink}`}>
              <div className="flex justify-center items-center">
                <img src={iosImage} alt="icon" className="size-16 mb-2" />
              </div>
              <div className="text-lg font-bold">
                {chrome.i18n.getMessage("LedgerApple")}
              </div>
            </a>
          </div>
          <div className=" flex justify-between">
            <a href={`${liveImageLink}`}>
              <div className="flex justify-center items-center">
                <img src={liveImage} alt="icon" className="size-16 mb-2" />
              </div>
              <div className="text-lg font-bold">
                {chrome.i18n.getMessage("LedgerLive")}
              </div>
            </a>
            <a href={`${macImageLink}`}>
              <div className="flex justify-center items-center">
                <img src={macImage} alt="icon" className="size-16 mb-2" />
              </div>
              <div className="text-lg font-bold">
                {chrome.i18n.getMessage("LedgerMac")}
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <div className=" bg-[#d46fa9] h-68 p-4 rounded-2xl mb-2 flex flex-col gap-3 ">
          {" "}
          <div className=" flex justify-between mb-3">
            <a href={`${conisImageLink}`}>
              <div className="flex justify-center items-center">
                <img src={conisImage} alt="icon" className="size-16 mb-2" />
              </div>
              <div className="text-lg font-bold">
                {chrome.i18n.getMessage("LedgerPlayStore")}
              </div>
            </a>
            <a href={`${ledgerStartImageLink}`}>
              <div className="flex justify-center items-center">
                <img
                  src={ledgerStartImage}
                  alt="icon"
                  className="size-16 mb-2"
                />
              </div>
              <div className="text-lg font-bold">
                {chrome.i18n.getMessage("LedgerCoins")}
              </div>
            </a>
          </div>
          <div className=" flex justify-between">
            <a href={`${productImageLink}`}>
              <div className="flex justify-center items-center">
                <img src={productImage} alt="icon" className="size-16 mb-2" />
              </div>
              <div className="text-lg font-bold">
                {chrome.i18n.getMessage("LedgerProduct")}
              </div>
            </a>
            <a href={`${supportImageLink}`}>
              <div className="flex justify-center items-center">
                <img src={supportImage} alt="icon" className="size-16 mb-2" />
              </div>
              <div className="text-lg font-bold">
                {chrome.i18n.getMessage("LedgerSupport")}
              </div>
            </a>
          </div>
        </div>
        <div className="flex h-32 w-full gap-3">
          <div className=" bg-[#5a79d6] p-3 w-full rounded-2xl">
            <a href={`${supportImageLink}`}>
              <div className="flex justify-center items-center mb-2">
                <img src={supportImage} alt="icon" className="size-16 mb-2" />
              </div>
              <div className="text-lg font-bold">
                {chrome.i18n.getMessage("LedgerSupport")}
              </div>
            </a>
          </div>
          <div className=" bg-[#8c68c8] p-3 w-full rounded-2xl">
            <a href={`${supportImageLink}`}>
              <div className="flex justify-center items-center mb-2">
                <img src={supportImage} alt="icon" className="size-16 mb-2" />
              </div>
              <div className="text-lg font-bold">
                {chrome.i18n.getMessage("LedgerSupport")}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mid;
