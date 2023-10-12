import { ChangeEvent, FormEvent, useState } from "react";
import { addSoldier } from "../../storage/storage.service";

const AddSoldier = ({ refreshList }: IAddSoldier) => {
  const [soldierName, setSoldierName] = useState<string>("");
  //   const [alert, setAlert] = useState<string>("");

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setSoldierName(value);
  };

  //   const closeAlert = () => {
  //     setAlert("");
  //   };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addSoldier(soldierName);
    setSoldierName("");
    refreshList();
    // setAlert("asdasd");
  };

  return (
    <>
      {/* {alert ? (
        <div className="absolute w-full p-4 max-w-xl top-6 rounded-xl text-green-900 border-[1px] flex-col border-green-500 mb-6 bg-green-100 flex items-center justify-between">
          <button
            onClick={closeAlert}
            className="self-start absolute text-red-600"
          >
            X
          </button>
          <p>{alert}</p>
        </div>
      ) : (
        ""
      )} */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 md:flex-row">
        <input
          className="input px-4 p-2"
          type="text"
          placeholder="שם החייל"
          value={soldierName}
          onChange={handleChange}
        />
        <button className="px-4 py-2 btn">הוסף חייל</button>
      </form>
    </>
  );
};

interface IAddSoldier {
  refreshList: () => void;
}

export default AddSoldier;
