import React from "react";
import { DashboardItem } from "./DashboardItem";

const defis = [
  {
    name: "Defi",
    url: "https://microchain.systems/",
    img: "/images/microchain.jpeg",
    api: "https://api.llama.fi/protocol/aave ",
  },
  {
    name: "Defi",
    url: "https://microchain.systems/",
    img: "/images/microchain.jpeg",
    api: "https://api.llama.fi/protocol/aave ",
  },
    {
    name: "Defi",
    url: "https://microchain.systems/",
    img: "/images/microchain.jpeg",
    api: "https://api.llama.fi/protocol/aave ",
  },
    {
    name: "Defi",
    url: "https://microchain.systems/",
    img: "/images/microchain.jpeg",
    api: "https://api.llama.fi/protocol/aave ",
  },
    {
    name: "Defi",
    url: "https://microchain.systems/",
    img: "/images/microchain.jpeg",
    api: "https://api.llama.fi/protocol/aave ",
  },
    {
    name: "Defi",
    url: "https://microchain.systems/",
    img: "/images/microchain.jpeg",
    api: "https://api.llama.fi/protocol/aave ",
  },
    {
    name: "Defi",
    url: "https://microchain.systems/",
    img: "/images/microchain.jpeg",
    api: "https://api.llama.fi/protocol/aave ",
  },
  
];

function Dashboard() {
  return (
    <section
      id="Dashboard"
      className="bg-slate-900 h-screen grid content-center"
    >
      <div className="flex flex-col w-5/6 mx-auto">
        <table className="border-slate-300 border-2 text-white">
          <thead>
            <tr>
              <th className="Name">
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
            {defis.map((item) => (
              <DashboardItem defi={item.name} image={item.img} url={item.url} api={item.api} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export { Dashboard };
