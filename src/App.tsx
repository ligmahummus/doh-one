import { useEffect, useState } from "react";
import Title from "./components/header/title";
import AddSoldier from "./components/soldier/add-soldier";
import SoldiersList from "./components/soldier/soldiers-list";
import { Soldier } from "./storage/storage.type";
import { getSoldiers } from "./storage/storage.service";
import { isPrivateMode } from "./lib/is-private";
import ExportWhatsapp from "./components/whatsapp/export-whatsapp";

function App() {
  const [refresh, setRefresh] = useState<boolean>(false);
  const [soldiers, setSoldiers] = useState<Soldier[]>([]);
  // const [privateError, setPrivateError] = useState<boolean>(false);

  useEffect(() => {
    const isPrivate = async () => {
      const result = await isPrivateMode();
      console.log("is private browsing?: " + result);
    };
    isPrivate();
  }, []);

  useEffect(() => {
    const soldiers = getSoldiers();
    setSoldiers(soldiers);
  }, [refresh]);

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
    <main className="max-w-2xl mx-auto flex flex-col items-center">
      <header>
        <Title />
      </header>
      <AddSoldier refreshList={() => setRefresh((prev) => !prev)} />
      <SoldiersList
        soldiers={soldiers}
        filterAll={filterAll}
        filterChecked={filterChecked}
        filterMissing={filterMissing}
      />
      <ExportWhatsapp />
    </main>
  );
}

export default App;
