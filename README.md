# ABRAMS ECO-PROFESSIONAL 2020

Модеран, responsive сајт на српском језику (ћирилица) за фирму која се бави
професионалним управљањем стамбеним заједницама.

## Технологија

- React + vinext/Next app структура
- Vite build за Cloudflare Worker/Sites deploy
- Tailwind CSS
- Контакт форма чува упите у Cloudflare D1 (`app/api/kontakt/route.ts`, `db/schema.ts`) — није чисто статичан сајт
- SEO metadata, Open Graph, `robots.txt`, `sitemap.xml`, `LocalBusiness` и `FAQPage` schema

## Покретање локално

Потребан је Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

Локални сајт се затим отвара на адреси коју прикаже dev сервер.

## Провера build-а

```bash
npm run build
```

Build производи Sites/Cloudflare Worker компатибилан `dist/` директоријум.

## Deploy

Овај пројекат је припремљен за OpenAI Sites/Cloudflare Worker hosting преко
`.openai/hosting.json`.

За класичан Vercel или Netlify deploy користите исти садржај и компоненте, али
покрените га као стандардни Next/Vite пројекат на њиховој платформи — контакт
форма тада захтева другачији backend јер D1 постоји само на Cloudflare/OpenAI
Sites hosting-у.

### Укључивање D1 базе за контакт форму

`.openai/hosting.json` већ има `"d1": "DB"`. Пре првог deploy-а:

```bash
npm run db:generate
```

Ово генерише SQL миграцију у `drizzle/` на основу `db/schema.ts` (табела
`leads`). Control plane при deploy-у креира D1 базу везану за
`project_id` из `.openai/hosting.json` и примењује миграцију. Локално, без
праве D1 базе, `dev` сервер и даље ради — форма ће само пријавити грешку слања
и понудити `mailto:` резервну опцију (уграђено у `ContactForm.tsx`).

## Садржај који треба заменити пре јавне објаве

- `public/placeholder-hero.svg`, `placeholder-zgrada.svg`,
  `placeholder-upravnik.svg`, `placeholder-tim.svg` — тренутно су то
  дорађене SVG илустрације (без "PLACEHOLDER" натписа) као привремено
  решење; замените их стварним фотографијама чим буду доступне.
- `company.residentPortalUrl` у `app/lib/content.ts` — поставити стварну
  адресу Управио портала за станаре кад буде јавно доступна (тренутно
  `null`, дугме у футеру приказује "ускоро").
- `NEXT_PUBLIC_SITE_URL` у runtime окружењу када домен буде познат.
