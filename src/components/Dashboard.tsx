import React from "react";
import { DashboardItem } from "./DashboardItem";

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

function Dashboard() {
  return (
    <section id="Dashboard" className="bg-slate-900  grid content-center">
      <div className="p-20">
        <div className="text-base border-slate-300 border-[1px] rounded-xl text-white flex flex-col w-5/6 mx-auto">
          <table className="">
            <thead>
              <tr className="h-12">
                <th className="text-start px-5">
                  <span>Name</span>
                </th>
                <th className="Url">
                  <span>Url</span>
                </th>
                <th className="TVL">
                  <span>TVL</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {defis.map((item, index) => (
                <DashboardItem
                  index={index}
                  defi={item.name}
                  image={item.img}
                  url={item.url}
                  api={item.api}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export { Dashboard };
