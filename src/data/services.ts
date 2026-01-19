export const serviceCategories = [
  "Терапия",
  "Гигиена",
  "Хирургия",
  "Ортопедия",
  "Ортодонтия",
  "Детям",
] as const;

export type ServiceCategory = typeof serviceCategories[number];

export type Service = {
  id: string;
  category: ServiceCategory;
  title: string;
  bullets: string[];
  price: string; // "от 3 500 ₽" | "по запросу"
};

export const services: Service[] = [
  {
    id: "treat-1",
    category: "Терапия",
    title: "Лечение кариеса",
    bullets: ["Диагностика", "Анестезия", "Пломба и шлифовка"],
    price: "по запросу",
  },
  {
    id: "hyg-1",
    category: "Гигиена",
    title: "Профессиональная чистка",
    bullets: ["Ультразвук", "AirFlow", "Полировка"],
    price: "по запросу",
  },
];
