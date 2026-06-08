export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://abrams-eco-professional-2020.rs";

export const company = {
  name: "ABRAMS ECO-PROFESSIONAL 2020",
  legalName: "ABRAMS ECO-PROFESSIONAL 2020",
  tagline: "Професионални управник за стамбене заједнице",
  description:
    "Професионално управљање стамбеним заједницама у Смедереву, уз транспарентно извештавање, брз одзив и одржив приступ одржавању зграда.",
  contactPerson: "Александар Абрамовић",
  phone: "069 747 303",
  phoneHref: "tel:+38169747303",
  email: "abramsecoprofessional2020@gmail.com",
  emailHref: "mailto:abramsecoprofessional2020@gmail.com",
  address: "Др Јована Цвијића 7, Смедерево, Србија",
  streetAddress: "Др Јована Цвијића 7",
  locality: "Смедерево",
  country: "RS",
  pib: "112727002",
  mb: "66312747",
  mapUrl:
    "https://www.google.com/maps?q=Dr%20Jovana%20Cvijica%207%2C%20Smederevo%2C%20Serbia&output=embed",
};

export const navItems = [
  { href: "/", label: "Почетна" },
  { href: "/o-nama", label: "О нама" },
  { href: "/usluge", label: "Услуге" },
  { href: "/zasto-mi", label: "Зашто ми" },
  { href: "/kontakt", label: "Контакт" },
] as const;

export type IconName =
  | "building"
  | "chart"
  | "tools"
  | "alarm"
  | "sparkles"
  | "users"
  | "leaf"
  | "clock"
  | "shield"
  | "phone"
  | "mail"
  | "map"
  | "check"
  | "file"
  | "menu"
  | "x"
  | "arrowUp";

export const services: Array<{
  title: string;
  description: string;
  icon: IconName;
}> = [
  {
    title: "Професионално управљање стамбеним заједницама",
    description:
      "Организовано вођење послова зграде, координација са станарима и праћење законских обавеза.",
    icon: "building",
  },
  {
    title: "Финансијско управљање и извештавање",
    description:
      "Јасан увид у фонд одржавања, планирање трошкова и редовни извештаји за стамбену заједницу.",
    icon: "chart",
  },
  {
    title: "Текуће и инвестиционо одржавање",
    description:
      "Планирање поправки, приоритети по хитности и сарадња са провереним извођачима.",
    icon: "tools",
  },
  {
    title: "Хитне интервенције 0-24",
    description:
      "Брза реакција у случају кварова, хаварија и ситуација које угрожавају безбедност станара.",
    icon: "alarm",
  },
  {
    title: "Одржавање хигијене заједничких просторија",
    description:
      "Организација редовног чишћења улаза, степеништа, ходника и других заједничких површина.",
    icon: "sparkles",
  },
  {
    title: "Комуникација и регистрација СЗ",
    description:
      "Подршка у комуникацији са станарима, институцијама и надлежним органима.",
    icon: "users",
  },
];

export const advantages = [
  {
    title: "Транспарентност",
    description:
      "Станари добијају разумљив преглед обавеза, трошкова и наредних корака.",
    icon: "file" as IconName,
  },
  {
    title: "Брз одзив",
    description:
      "Проблеми у згради се евидентирају, приоритизују и решавају без непотребног чекања.",
    icon: "clock" as IconName,
  },
  {
    title: "Еко стандарди",
    description:
      "Одржавање се планира уз пажњу на енергетску ефикасност, уштеду ресурса и чистије окружење.",
    icon: "leaf" as IconName,
  },
  {
    title: "Одговорност",
    description:
      "Једна контакт особа прати договоре, рокове, извођаче и комуникацију са стамбеном заједницом.",
    icon: "shield" as IconName,
  },
];

export const testimonials = [
  {
    quote:
      "Сада имамо јасан план одржавања и бржи договор око сваког квара у згради.",
    author: "Пример утиска станара",
    detail: "Стамбена заједница, Смедерево",
  },
  {
    quote:
      "Извештаји су прегледни, а станари коначно знају где иде новац из фонда.",
    author: "Пример утиска председника СЗ",
    detail: "Стамбена зграда са више улаза",
  },
  {
    quote:
      "Посебно нам значи што се води рачуна о хигијени, реду и дугорочним поправкама.",
    author: "Пример утиска корисника",
    detail: "Породична стамбена зграда",
  },
];

export const metrics = [
  { value: "0-24", label: "за хитне интервенције" },
  { value: "100%", label: "транспарентан приступ" },
  { value: "ECO", label: "одрживо одржавање" },
];

export const pageDescriptions = {
  home: company.description,
  about:
    "Сазнајте више о фирми ABRAMS ECO-PROFESSIONAL 2020, мисији, еколошком приступу и професионалном управнику Александру Абрамовићу.",
  services:
    "Преглед услуга професионалног управљања стамбеним заједницама: финансије, одржавање, хигијена, хитне интервенције и комуникација.",
  why:
    "Разлози да стамбена заједница изабере ABRAMS ECO-PROFESSIONAL 2020: транспарентност, брз одзив, одговорност и еко стандарди.",
  contact:
    "Контактирајте ABRAMS ECO-PROFESSIONAL 2020 у Смедереву. Телефон, email, адреса, мапа и форма за упит.",
};
