import { useEffect, useState } from "react";
import {
  clearAllCheckboxes,
  clearAllNotes,
  clearAllSoldiers,
  getSoldiers,
} from "../../storage/storage.service";
import SoldierItem from "./soldier-item";
import { Soldier } from "../../storage/storage.type";

const SoldiersList = () => {
  const [soldiers, setSoldiers] = useState<Soldier[]>([]);

  useEffect(() => {
    const soldiers = getSoldiers();
    setSoldiers(soldiers);
  }, []);

  const filterMissing = () => {
    const all = getSoldiers();
    const missing = all.filter((soldier) => !soldier.isChecked);
    setSoldiers(missing);
  };

  const filterChecked = () => {
    const all = getSoldiers();
    const checked = all.filter((soldier) => soldier.isChecked);
    setSoldiers(checked);
  };

  const filterAll = () => {
    const all = getSoldiers();
    setSoldiers(all);
  };

  return (
    <article className="mt-12 w-full">
      <div className="flex flex-wrap gap-6 items-center justify-center mb-10">
        <button onClick={filterMissing} className="btn px-2 py-1">
          לא מסומנים בלבד
        </button>
        <button onClick={filterChecked} className="btn px-2 py-1">
          מסומנים בלבד
        </button>
        <button onClick={filterAll} className="btn px-2 py-1">
          הצג הכל
        </button>
      </div>
      {soldiers.length > 0 ? (
        <div className="flex items-center justify-center flex-col">
          {soldiers.map((soldier) => (
            <SoldierItem key={soldier.id} soldier={soldier} />
          ))}
        </div>
      ) : (
        <div>אין חיילים ברשימה</div>
      )}

      <div className="flex flex-wrap gap-6 items-center justify-center my-10">
        <button
          onClick={clearAllCheckboxes}
          className="btn px-2 py-1 btn-danger"
        >
          ניקוי כל הסימנים
        </button>
        <button onClick={clearAllNotes} className="btn px-2 py-1 btn-danger">
          ניקוי כל ההיערות
        </button>
        <button onClick={clearAllSoldiers} className="btn px-2 py-1 btn-danger">
          מחק את כל החיילים
        </button>
      </div>
    </article>
  );
};

export default SoldiersList;
