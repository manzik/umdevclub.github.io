import React from "react";

import { Button } from "@mui/material";

function Hackathon() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "70vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          textTransform: "uppercase",
          letterSpacing: "0.3em",
        }}
      >
        Register for the hackathon!
      </h1>
      <Button
        variant="contained"
        size="large"
        style={{ letterSpacing: "0.2em" }}
        onClick={() => window.open("/hackathon-register")}
      >
        Register
      </Button>
    </div>
  );
}

export default Hackathon;
