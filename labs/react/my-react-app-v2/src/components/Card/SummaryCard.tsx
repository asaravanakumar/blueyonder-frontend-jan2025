import React from "react";
import IUser from "../../modal/IUser";
import { Link } from "react-router-dom";

interface SummaryCardProps {
  user: IUser;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  user,
}: SummaryCardProps) => {
  const { id, name, phone, email } = user;
  console.log("Received User:", user);
  console.log("User Name:", name);
  console.log("User Phone:", phone);
  console.log("User Email:", email);
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          Phone: {phone}
        </h6>
        <p className="card-text">E-Mail: {email}</p>
        <Link to={`/crud/${id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default SummaryCard;
