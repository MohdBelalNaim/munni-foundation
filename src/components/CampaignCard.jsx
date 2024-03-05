import { BsCalendar, BsPeople } from "react-icons/bs";
const CampaignCard = (props) => {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
      <img
        src={`https://picsum.photos/400?${props.index}`}
        className="w-full h-48 object-cover"
        alt=""
      />

      <div className="px-4 text-sm mt-3">
        Help to educate 14,000 girl childs in delhi with a big dream
      </div>

      <div className="px-4 flex gap-6 items-center mt-3">
        <div className="flex items-center gap-2">
          <BsPeople className="text-lg" />
          <div className="text-xs">
            3 <span className="text-gray-500">Givers {props.name}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <BsCalendar className="text-sm" />
          <div className="text-xs">
            4 <span className="text-gray-500">Days Left</span>
          </div>
        </div>
      </div>

      <div className="px-4 mt-3 mb-3">
        <div className="w-full h-1 bg-gray-300 rounded-full">
          <div className="w-[40%] h-1 bg-secondary rounded-full"></div>
        </div>
      </div>

      <div className="px-4 flex mb-5 justify-between items-center">
        <div>
          <div className="text-lg font-bold">₹14,500</div>
          <div className="text-sm text-gray-500">Funded of ₹20,000</div>
        </div>
        <div>
          <button className="bg-secondary text-white text-xs px-5 py-2 rounded-full">
            Donate
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default CampaignCard;
