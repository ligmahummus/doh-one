import Title from "./components/header/title";
import AddSoldier from "./components/soldier/add-soldier";
import SoldiersList from "./components/soldier/soldiers-list";

function App() {
  return (
    <main className="max-w-2xl mx-auto flex flex-col items-center">
      <header>
        <Title />
      </header>
      <AddSoldier />
      <SoldiersList />
    </main>
  );
}

export default App;
