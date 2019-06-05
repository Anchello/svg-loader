import SvgLoader, {SvgLoaderProps} from "../components/svg-loader/index";
import React from "react";

const Loader: React.FC<SvgLoaderProps> = React.memo((props) => (
  <SvgLoader {...props}>
    <circle cx="20" cy="37" r="20"/>
    <rect x="60" y="0" width="40" height="15" rx="8" ry="8"/>
    <rect x="60" y="25" width="140" height="20" rx="8" ry="8"/>
    <rect x="60" y="55" width="100" height="15" rx="8" ry="8"/>
    <rect x="220" y="0" width="130" height="70" rx="8" ry="8"/>
  </SvgLoader>
  )
);

export default Loader;
