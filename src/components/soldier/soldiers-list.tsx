import {
  clearAllCheckboxes,
  clearAllNotes,
  clearAllSoldiers,
} from "../../storage/storage.service";
import SoldierItem from "./soldier-item";
import { Soldier } from "../../storage/storage.type";

const SoldiersList = ({
  soldiers,
  filterMissing,
  filterChecked,
  filterAll,
}: ISoldiersList) => {
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

interface ISoldiersList {
  soldiers: Soldier[];
  filterMissing: () => void;
  filterChecked: () => void;
  filterAll: () => void;
}

export default SoldiersList;
