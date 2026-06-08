# ABRAMS ECO-PROFESSIONAL 2020

Модеран, responsive сајт на српском језику (ћирилица) за фирму која се бави
професионалним управљањем стамбеним заједницама.

## Технологија

- React + vinext/Next app структура
- Vite build за Cloudflare Worker/Sites deploy
- Tailwind CSS
- Статички сајт без backend-а
- SEO metadata, Open Graph, `robots.txt`, `sitemap.xml` и LocalBusiness schema

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
покрените га као стандардни Next/Vite пројекат на њиховој платформи. Пре јавног
објављивања замените placeholder слике у `public/` стварним фотографијама и
подесите `NEXT_PUBLIC_SITE_URL` на финални домен.

## Садржај који треба заменити пре објаве

- `public/placeholder-hero.svg`
- `public/placeholder-zgrada.svg`
- `public/placeholder-upravnik.svg`
- `public/placeholder-tim.svg`
- пример утиске клијената у `app/lib/content.ts`
- `NEXT_PUBLIC_SITE_URL` у runtime окружењу када домен буде познат
