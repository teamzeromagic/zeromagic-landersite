import React, { useEffect } from "react";
import ActualDocItem from "@theme/DocItem"; 
import ZeromagicWithBanner from "../ZeromagicWithBanner";
import CustomFooter from "../CustomFooter";
const CustomDocItem = (props) => {
  return (
    <div>
      <ActualDocItem {...props} />
      <div>
        <ZeromagicWithBanner />

        <CustomFooter />
      </div>
    </div>
  );
};

export default CustomDocItem;
