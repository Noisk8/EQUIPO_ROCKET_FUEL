import React from "react";
import Image from "next/image";

function DashboardItem({ defi, image, url, api }: any) {
  const [data, setData] = React.useState(0);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        const data = await response.json();
        let value = 0;
        Object.values(data.currentChainTvls).map((element: any) => {
          value += element;
        });
        setData(value);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <tr>
      <td>
        <Image
          src={image}
          alt="An example image"
          width={50}
          height={30}
        />
        <span>{defi}</span>
      </td>
      <td>
        <span>{url}</span>
      </td>
      <td>
        <span>{data}</span>
      </td>
    </tr>
  );
}

export { DashboardItem };
