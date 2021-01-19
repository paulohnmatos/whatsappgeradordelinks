import React from "react";
import "./index.css";

function RodaPe() {
  const now = new Date();

  return (
    <footer>
      <p>
        Atualizado em <span>{now.getFullYear()}</span>
      </p>
    </footer>
  );
}

export default RodaPe;
