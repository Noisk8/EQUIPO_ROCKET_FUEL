import React from "react";
import Image from "next/image";

function DashboardItem({ defi, image, url, TVL , index}: any) {
  let dollarUSLocale = Intl.NumberFormat("en-US");

  return (
    <tr className="border-[1px] h-16 border-slate-500 ">
      <td className="h-full text-center">
        <div className="flex flex-row gap-5 px-5">
          <span className="grid content-center">{index + 1}.</span>
          <Image
            className="rounded-full"
            src={image}
            alt="An example image"
            width={36}
            height={36}
          />
          <span className="grid content-center">{defi}</span>
        </div>
      </td>
      <td className="h-full text-center">
        <span>{url}</span>
      </td>
      <td className="h-full text-center">
        <span>{dollarUSLocale.format(TVL)}</span>
      </td>
    </tr>
  );
}

export { DashboardItem };
