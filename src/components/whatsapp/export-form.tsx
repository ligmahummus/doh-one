import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { savePhone, whatsappOutput } from "../../storage/storage.service";

const ExportForm = ({ toggle }: IExportForm) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleChangePhoneNumber = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setPhoneNumber(value);
  };

  useEffect(() => {
    const phone = localStorage.getItem("phone");
    if (phone) setPhoneNumber(phone);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isNaN(+phoneNumber)) return alert("מספר פלאפון חייב להיות מספר");
    if (!phoneNumber) return alert("חסר מספר פלאפון");
    savePhone(phoneNumber);

    const output = whatsappOutput();
    location.href = `whatsapp://send?text=${output}&phone=+972${+phoneNumber}`;
  };

  return (
    <div className="fixed inset-0 bg-zinc-800/60 flex items-center justify-center">
      <form
        className="bg-white h-max w-[90%] max-w-[600px] shadow-xl p-6 rounded-xl flex flex-col gap-6"
        onSubmit={handleSubmit}
      >
        <div onClick={toggle} className="text-red-500 self-end">
          סגור
        </div>
        <ul className="list-disc bg-gray-100 p-2 rounded-xl border-[1px] text-sm text-gray-700">
          <li className="mr-4">כדאי לרשום את המספר ידנית ולא להעתיק ולהדביק</li>
          <li className="mr-4">ללא קידומת, ללא מקף, לדוגמה - 0501234567</li>
          <li className="mr-4">המספר נשמר אוטומטית לפעמים הבאות</li>
        </ul>
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
