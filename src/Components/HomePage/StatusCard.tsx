
import React from 'react';

interface StatCardProps {
  title: string;
  icon: string;
  count: number | string;
}

const StatusCard: React.FC<StatCardProps> = ({ title, icon, count }) => {
  return (
    <div className="flex flex-col items-center p-6 mb-4 bg-white shadow-md hover:border-b-2 hover:border-orange-600">
      <div className="mb-2 text-md text-slate-800 ">{title}</div>
      <div className=" rounded-full w-24 h-24 p-4 flex items-center justify-center bg-[#EBF1F3]"> <img src={icon} className='object-contain max-w-full '/></div>
      <div className="mt-2 mb-2 text-lg font-bold text-gray-800">{count}+</div>
    </div>
  );
};
export default StatusCard;

