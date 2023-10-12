import uuid from "../lib/uuid";
import { Soldier } from "./storage.type";

const LOCAL_STORAGE_KEY = "soldiers";

export function addSoldier(name: string): void {
  const soldier: Soldier = {
    id: uuid(),
    name,
    notes: "",
    isChecked: false,
  };
  const soldiers = getSoldiers();
  soldiers.push(soldier);
  setSoldiers(soldiers);
}

function setSoldiers(soldiers: Soldier[]): void {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(soldiers));
}

export function checkSoldier(id: string, isChecked: boolean): void {
  const soldiers = getSoldiers();
  const index = soldiers.findIndex((soldier) => soldier.id === id);
  if (index !== -1) {
    soldiers[index].isChecked = !isChecked;
    setSoldiers(soldiers);
  }
}

export function removeSoldier(id: string): void {
  const soldiers = getSoldiers();
  const index = soldiers.findIndex((soldier) => soldier.id === id);

  if (index !== -1) {
    const input = prompt("Are you sure you want to delete this soldier? (y/n)");
    if (input == "y") {
      soldiers.splice(index, 1);
      setSoldiers(soldiers);
      location.reload();
    }
  }
}

export function getSoldiers(): Soldier[] {
  const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (raw) {
    return JSON.parse(raw);
  } else {
    setSoldiers([]);
    return [];
  }
}

export function updateSoldierNote(id: string, note: string): void {
  const soldiers = getSoldiers();
  const index = soldiers.findIndex((s) => id === s.id);
  if (index !== -1) {
    soldiers[index].notes = note;
    setSoldiers(soldiers);
  }
}

export function clearAllSoldiers(): void {
  const input = prompt("Are you sure you want to clear all soldiers? (y/n)");
  if (input == "y") {
    setSoldiers([]);
    location.reload();
  }
}

export function clearAllCheckboxes() {
  const input = prompt("Are you sure you want to clear all checkboxes? (y/n)");
  if (input == "y") {
    const soldiers = getSoldiers();
    soldiers.forEach((soldier) => {
      soldier.isChecked = false;
    });
    setSoldiers(soldiers);
    location.reload();
  }
}

export function clearAllNotes() {
  const input = prompt("Are you sure you want to clear all notes? (y/n)");
  if (input == "y") {
    const soldiers = getSoldiers();
    soldiers.forEach((soldier) => {
      soldier.notes = "";
    });
    setSoldiers(soldiers);
    location.reload();
  }
}
