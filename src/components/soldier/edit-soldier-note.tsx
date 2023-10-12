import { ChangeEvent } from "react";
import { Soldier } from "../../storage/storage.type";
import { updateSoldierNote } from "../../storage/storage.service";

const EditSoldierNote = ({
  soldier,
  setNote,
  toggleEdit,
  note,
}: IEditSoldierNote) => {
  const handleChangeNote = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setNote(value);
  };

  const saveNote = () => {
    updateSoldierNote(soldier.id, note);
    toggleEdit();
  };

  return (
    <div className="flex items-center gap-2 text-[.8em] flex-col">
      <div className="flex gap-2 items-center">
        <input
          type="text"
          placeholder="הערה לחייל"
          value={note}
          onChange={handleChangeNote}
          className="input px-2 py-1"
        />
        <button className="btn px-2 py-1" onClick={saveNote}>
          שמור
        </button>
      </div>
      <button className="text-center text-sm text-red-600" onClick={toggleEdit}>
        סגור ללא שמירה
      </button>
    </div>
  );
};

interface IEditSoldierNote {
  soldier: Soldier;
  toggleEdit: () => void;
  note: string;
  setNote: (note: string) => void;
}

export default EditSoldierNote;
