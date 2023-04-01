import React from "react";
import Skeleton from "react-loading-skeleton";

function DashboardItemSkeleton() {

  return (
    <tr className="border-[1px] h-16 border-slate-500 skeleton ">
      <th></th>
      <th></th>
      <th></th>
    </tr>
  );
}

export { DashboardItemSkeleton };
