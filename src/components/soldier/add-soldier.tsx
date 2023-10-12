import { ChangeEvent, FormEvent, useState } from "react";
import { addSoldier } from "../../storage/storage.service";

const AddSoldier = ({ refreshList }: IAddSoldier) => {
  const [soldierName, setSoldierName] = useState<string>("");
  const [personalNumber, setPersonalNumber] = useState<string>("");

  const handleNameChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setSoldierName(value);
  };

  const handleNumberChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setPersonalNumber(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!soldierName || !personalNumber)
      return alert("חסר מספר אישי / שם חייל");
    if (isNaN(+personalNumber)) return alert("מספר אישי חייב להיות מספר");

    addSoldier(soldierName, personalNumber);
    setSoldierName("");
    setPersonalNumber("");
    refreshList();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 md:flex-row w-full px-4"
      >
        <div className="flex flex-col gap-4 w-full">
          <input
            className="input px-4 p-2"
            type="text"
            placeholder="שם החייל"
            value={soldierName}
            onChange={handleNameChange}
          />
          <input
            className="input px-4 p-2"
            type="text"
            placeholder="מספר אישי"
            value={personalNumber}
            onChange={handleNumberChange}
          />
          <button className="px-4 py-2 btn w-full md:w-max mx-auto">
            הוסף חייל
          </button>
        </div>
      </form>
    </>
  );
};

interface IAddSoldier {
  refreshList: () => void;
}

export default AddSoldier;
