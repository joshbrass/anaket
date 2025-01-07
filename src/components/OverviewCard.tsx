import React from "react";

interface OverviewCardProps {
  title: string;
  value: string;
}

const OverviewCard: React.FC<OverviewCardProps> = ({ title, value }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-gray-700 font-semibold">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default OverviewCard;