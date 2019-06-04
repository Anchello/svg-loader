import "./svg-loader.css";

import * as React from "react";
import * as uuid from "uuid";
import classnames from "classnames";
import LinearGradient from "../linear-gradient";
import { DIRECTION } from "../constatns";

interface Props {
  width: number;
  height: number;
  direction?: string;
  reverse?: boolean;
}

const Index: React.FC<Props> = React.memo(
  ({ width, height, children, direction = DIRECTION.vertical, reverse}) => {
    const idMask = uuid.v4();
    const idGradient = uuid.v4();
    return (
      <svg
        className="svg-loader"
        width={`${width}px`}
        height={`${height}px`}
        viewBox={`0 0 ${width} ${height}`}
        version="1.1"
      >
        <defs>
          <LinearGradient id={idGradient} direction={direction}/>
          <mask id={idMask}>
            <rect
              className={classnames("svg-loader__cube", {
                "svg-loader__cube--horizontal": direction === DIRECTION.horizontal,
                "svg-loader__cube--vertical": direction === DIRECTION.vertical,
                "svg-loader__cube--reverse": reverse
              })}
              fill={`url(#${idGradient})`}
              x="0"
              y="0"
              width={`${width}px`}
              height={`${height}px`}
            />
          </mask>
        </defs>
        <g className="svg-loader__path">{children}</g>
        <g className="svg-loader__path-mask" mask={`url(#${idMask})`}>
          {children}
        </g>
      </svg>
    );
  }
);

export default Index;