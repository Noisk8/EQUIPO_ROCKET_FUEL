import React from "react";
import Image from "next/image";

function DashboardItem({ defi, image, url, api , index}: any) {
  const [data, setData] = React.useState(0);
  let dollarUSLocale = Intl.NumberFormat("en-US");


//   const callAll = (links: Array<string>) => {
//     const results = Promise.all(links.map((link) => fetchData(link)));
//     resturn results
//   }

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        const data = await response.json();
        let value = 0;
        Object.values(data.currentChainTvls).map((element: any) => {
          value += element;
        });
        value = Math.floor(value)
        setData(value);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
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
        <span>{dollarUSLocale.format(data)}</span>
      </td>
    </tr>
  );
}

export { DashboardItem };
