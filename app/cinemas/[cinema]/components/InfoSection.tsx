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
    <h2 className={h2style}>{title}</h2>
    {IconComponent && <IconComponent />}
    <p>{description}</p>
  </>
);

export default InfoSection;
