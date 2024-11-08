import { ReactNode } from "react";
import arrowIcon from "../assets/arrow-icon.svg";
import ArrowIcon from "../icons/ArrowIcon";
interface Props {
  children: ReactNode;
  className?: string;
  isIconVissible?: boolean;
}

const Card = ({
  children,
  className = "p-12",
  isIconVissible = true,
}: Props) => {
  const classNames = ` group overflow-hidden relative rounded-[35px] shadow-md border-10 border-white bg-gradient-to-tl from-base-200 to-base-300 ${className} `;
  return (
    <div className={classNames}>
      {children}

      {isIconVissible && (
        // <img
        //   className="absolute bottom-0 right-0 w-12 h-12 z-30 m-6 "
        //   src={arrowIcon}
        // />
        
        <ArrowIcon className="text-base-content/40 group-hover:text-base-content absolute bottom-0 right-0 w-12 h-12 z-30 m-6"/>
      )}
    </div>
  );
};

export default Card;
