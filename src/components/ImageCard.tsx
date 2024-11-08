import  { ReactNode } from "react";
import Card from "./Card";

interface Props {
  title: string;
  subtitle: string;
  children: ReactNode;
  className?: string
}
const ImageCard = ({ title, subtitle, children, className } : Props) => {
  return (
    <Card className={`p-8 ${className}`}>
      {children}

      <h3 className="text-md font-medium uppercase mb-1 mt-2 p-0 text-base-content/40">
        {subtitle}
      </h3>

      <h3 className="text-lg font-semibold mb-5 p-0">{title}</h3>
    </Card>
  );
};

export default ImageCard;
