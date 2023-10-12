import { ChangeEvent, FormEvent, useState } from "react";
import { whatsappOutput } from "../../storage/storage.service";

const ExportForm = ({ toggle }: IExportForm) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleChangePhoneNumber = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setPhoneNumber(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isNaN(+phoneNumber)) return alert("מספר פלאפון חייב להיות מספר");
    if (!phoneNumber) return alert("חסר מספר פלאפון");
    const output = whatsappOutput();
    location.href = `whatsapp://send?text=${output}&phone=+972${+phoneNumber}`;
  };

  return (
    <div className="fixed inset-0 bg-zinc-800/60 flex items-center justify-center">
      <form
        className="bg-white h-max shadow-xl p-6 rounded-xl flex flex-col gap-6"
        onSubmit={handleSubmit}
      >
        <div onClick={toggle} className="text-red-500 self-end">
          סגור
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone">מספר פלאפון: </label>

          <input
            id="phone"
            className="input px-2 py-1"
            placeholder="מספר פלאפון לייצוא הרשימה"
            type="text"
            value={phoneNumber}
            onChange={handleChangePhoneNumber}
          />
        </div>
        <button type="submit" className="btn px-2 py-1">
          ייצא רשימה
        </button>
      </form>
    </div>
  );
};

interface IExportForm {
  toggle: () => void;
}

export default ExportForm;
