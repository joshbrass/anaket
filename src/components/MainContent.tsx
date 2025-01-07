import React from "react";
import OverviewCard from "./OverviewCard";
import AnalyticsChart from "./AnalyticsChart";
import UserTable from "./UserTable";

const MainContent: React.FC = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <OverviewCard title="Total Users" value="1,024" />
        <OverviewCard title="Active Projects" value="128" />
        <OverviewCard title="Revenue" value="$12,345" />
      </div>
      <div className="mt-8">
        <AnalyticsChart />
      </div>
      <div className="mt-8 overflow-x-auto">
        <UserTable />
      </div>
    </div>
  );
};

export default MainContent;