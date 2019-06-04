import * as React from "react";
import { DIRECTION } from "../constatns";

interface Props {
  id: string;
  direction: string;
}

const LinearGradient: React.FC<Props> = React.memo(
  ({id, direction}) => {
    const x2 = direction === DIRECTION.vertical ? 100 : 0;
    const y2 = direction === DIRECTION.vertical ? 0 : 100;
    return (
      <linearGradient
        x1="0%"
        y1="0%"
        x2={`${x2}%`}
        y2={`${y2}%`}
        id={id}
      >
        <stop stopColor="#FFFFFF" stopOpacity="0" offset="0"/>
        <stop stopColor="#FFFFFF" stopOpacity="0.3" offset="0.3"/>
        <stop stopColor="#FFFFFF" stopOpacity="0.6" offset="0.5"/>
        <stop stopColor="#FFFFFF" stopOpacity="0.3" offset="0.7"/>
        <stop stopColor="#FFFFFF" stopOpacity="0" offset="1"/>
      </linearGradient>
    );
  }
);

export default LinearGradient;
