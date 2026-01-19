export type Doctor = {
  id: string;
  name: string;        // placeholder
  role: string;        // placeholder
  experience: string;  // placeholder
  img: string;         // /doctors/01.webp
  tags: string[];
};

export const doctors: Doctor[] = Array.from({ length: 4 }).map((_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    id: `doc-${n}`,
    name: "Скоро добавим имя",
    role: "Врач-стоматолог",
    experience: "Стаж: —",
    img: `/doctors/${n}.webp`,
    tags: ["Терапия", "Гигиена"],
  };
});
