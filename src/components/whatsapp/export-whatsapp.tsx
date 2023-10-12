import { useState } from "react";
import ExportForm from "./export-form";
import whatsappSvg from "../../assets/whatsapp.svg";

const ExportWhatsapp = () => {
  const [showExport, setSHowExport] = useState(false);

  const toggleShowExport = () => setSHowExport((prev) => !prev);

  return (
    <>
      {showExport ? <ExportForm toggle={toggleShowExport} /> : ""}
      <button
        className="fixed bottom-2 w-12 h-12 left-2"
        onClick={toggleShowExport}
      >
        <img src={whatsappSvg} className="rounded-lg" />
      </button>
    </>
  );
};

export default ExportWhatsapp;
