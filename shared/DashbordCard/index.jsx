
const DashboardCard = ({category,date,type,desc}) => {
  return (
    <div className="card border-wrap m30">
      <div className="flex-3 ">
        <p className="p10">{category}</p>
        <p className="p10 b-top">{date}</p>
      </div>
      <div className="flex-6 ">
        <p className="p10">
          <strong>{type}</strong>
        </p>
        <p className="p10 b-top">{desc}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
