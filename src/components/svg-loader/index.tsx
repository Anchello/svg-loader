import "./svg-loader.css";

import * as React from "react";
import * as uuid from "uuid";
import classnames from "classnames";
import LinearGradient from "../linear-gradient";
import { DIRECTION } from "../constatns";

export interface SvgLoaderProps {
  width: number;
  height: number;
  direction?: string;
  reverse?: boolean;
  backColor?: string;
  loaderColor?: string;
  className?: string;
}

const SvgLoader: React.FC<SvgLoaderProps> = React.memo(
  ({width, height, children, direction, reverse, backColor, loaderColor, className}) => {
    const idMask = uuid.v4();
    const idGradient = uuid.v4();
    return (
      <svg
        className={classnames("svg-loader", className)}
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
        <g fill={backColor}>{children}</g>
        <g fill={loaderColor} mask={`url(#${idMask})`}>
          {children}
        </g>
      </svg>
    );
  }
);

SvgLoader.defaultProps = {
  direction: DIRECTION.vertical,
  reverse: false,
  backColor: "#101080",
  loaderColor: "#347dcc"
};


export default SvgLoader;
