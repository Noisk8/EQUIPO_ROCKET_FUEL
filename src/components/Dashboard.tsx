import React, { useEffect } from "react";
import { DashboardItem } from "./DashboardItem";
import { DashboardItemSkeleton } from "./DashboardSkeleton";

const defis = [
  {
    name: "Microchain",
    url: "https://microchain.systems/",
    img: "/images/microchain.jpeg",
    api: "https://api.llama.fi/protocol/aave ",
  },
  {
    name: "Sway Gang",
    url: "",
    img: "/images/sway-gang.jpeg",
    api: "https://api.llama.fi/protocol/PancakeSwap ",
  },
  {
    name: "SwayLend",
    url: "https://swaylend.com/",
    img: "/images/sway-lend.png",
    api: "https://api.llama.fi/protocol/Lido",
  },
  {
    name: "FuFi",
    url: "",
    img: "/images/fufi.jpeg",
    api: "https://api.llama.fi/protocol/MakerDAO",
  },
  {
    name: "Acumen",
    url: "https://acumen.network/",
    img: "/images/acumen.jpeg",
    api: "https://api.llama.fi/protocol/Curve",
  },
  {
    name: "Fluid Protocol",
    url: "",
    img: "/images/fluid_banner.jpeg",
    api: "https://api.llama.fi/protocol/Crypto-com",
  },
  {
    name: "Yama Finance",
    url: "https://yama.finance/",
    img: "/images/yama-finance.jpeg",
    api: "https://api.llama.fi/protocol/Bybit",
  },
  {
    name: "Poolshark",
    url: "https://docs.poolsharks.io/",
    img: "/images/poolshark.jpeg",
    api: "https://api.llama.fi/protocol/Gate-io",
  },
  {
    name: "Tau Protocol",
    url: "",
    img: "/images/tau-protocol.jpeg",
    api: "https://api.llama.fi/protocol/Compound",
  },
  {
    name: "Elix",
    url: "https://elix.finance/",
    img: "/images/elix.png",
    api: "https://api.llama.fi/protocol/SushiSwap",
  },
  {
    name: "Redstone Oracles",
    url: "https://redstone.finance/",
    img: "/images/redstone-finance.png",
    api: "https://api.llama.fi/protocol/Bitget",
  },
  {
    name: "Smart money",
    url: "",
    img: "/images/smart-money.jpeg",
    api: "https://api.llama.fi/protocol/Bitget",
  },
];

const getContractTVL = async (link: string) => {
  let result: any = await fetch(link);
  let data = await result.json();
  return data.currentChainTvls;
};

function Dashboard() {
  const [data, setData] = React.useState<any>(new Array(defis.length).fill(0));
  const [loaded, setloaded] = React.useState(false);

  useEffect(() => {
    const links = defis.map((defi) => defi.api);
    Promise.allSettled(links.map((link) => getContractTVL(link))).then(
      (results) => {
        let values = results.map((result: any) => {
          let TVLs = result.value;
          console.log(TVLs);

          const TotalTVL: any = Object.values(TVLs).reduce(
            (accum: any, currentValue: any) => accum + currentValue,
            0
          );
          return Math.floor(TotalTVL);
        });

        const newDefis = defis.map((defi, index) => {
          let newDefi = { ...defi, TVL: values[index] };
          return newDefi;
        });
        setData(newDefis);
        setloaded(true);
      }
    );
  }, []);

  return (
    <section id="Dashboard" className="bg-slate-950  grid content-center">
      <div className="p-2 md:p-20">
        <h1 className="text-white text-center text-xl  md:text-8xl md:p-10"  >Defi's Dashboard</h1>
        <div className="text-base overflow-x-auto border-slate-300 border-[1px] rounded-xl text-white flex flex-col w-5/6 mx-auto">
          <table className="overflow-x-auto w-full table-fixed">
            {loaded ? (
              <thead>
                <tr className="h-12">
                  <th className="text-start px-5">
                    <span>Name</span>
                  </th>
                  <th >
                    <span>Url</span>
                  </th>
                  <th >
                    <span>TVL</span>
                  </th>
                </tr>
              </thead>
            ) : (
              <thead>
                <tr className="h-12 skeleton">
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
            )}

            <tbody>
              {loaded
                ? data.map((item: any, index: any) => (
                    <DashboardItem
                      key={index}
                      index={index}
                      defi={item.name}
                      image={item.img}
                      url={item.url}
                      TVL={item.TVL}
                    />
                  ))
                : data.map((item: any, index: any) => (
                    <DashboardItemSkeleton  key={index}/>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export { Dashboard };
