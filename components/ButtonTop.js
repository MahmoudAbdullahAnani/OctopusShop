import { Button } from "@mui/material";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { useEffect, useState } from "react";
const ButtonTop = () => {

   return(
    <Button
      className="position-fixed bottom-0 end-0  m-3"
      variant="outlined"
      size="small"
      onClick={() => {
        scroll(0, 0);
      }}
    >
      <KeyboardDoubleArrowUpIcon />
    </Button>
  );
};

export default ButtonTop;
