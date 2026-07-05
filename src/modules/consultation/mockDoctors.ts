import { Doctor } from "./types";

const specializations = ["Ayurveda", "Skin", "Hair", "Nutrition", "Digestive"];

function generateSlots() {
  return Array.from({ length: 8 }, (_, i) => ({
    id: `slot-${i}`,
    time: `${9 + i}:00`,
    // make some slots unavailable for testing (every 3rd slot)
    available: i % 3 !== 0,
  }));
}

export function generateDoctors(count = 5000): Doctor[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `doctor-${i}`,
    name: `Doctor ${i}`,
    specialization: specializations[i % specializations.length],
    experience: Math.floor(Math.random() * 20) + 1,
    rating: Number((Math.random() * 2 + 3).toFixed(1)),
    consultationFee: Math.floor(Math.random() * 1000) + 500,
    slots: generateSlots(),
  }));
}
