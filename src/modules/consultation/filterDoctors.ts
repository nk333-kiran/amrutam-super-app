import { Doctor } from "./types";

export function filterDoctors(doctors: Doctor[], search: string, filter: string | null) {
  return doctors.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = filter ? doc.specialization === filter : true;

    return matchesSearch && matchesFilter;
  });
}
