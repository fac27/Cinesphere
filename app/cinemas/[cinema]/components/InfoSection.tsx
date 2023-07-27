import { h2style } from "@/Styles/Tailwind-Styles";
import React from "react";

interface InfoSectionProps {
  title: string;
  IconComponent?: React.ElementType;
  description: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({
  title,
  IconComponent,
  description,
}) => (
  <>
    <div className="flex items-center">
      {IconComponent && <IconComponent className="text-2xl"/>}
      <h2 className={`ml-2 ${h2style}`}>{title}</h2>
    </div>
    <p>{description}</p>
  </>
);

export default InfoSection;
