# vijjr.com

Personal portfolio for Vijay Ravi, organized around three disciplines: Software, Games, and Robotics.
Angular 16, deployed to Firebase Hosting.

## Editing content

All content lives in [`src/app/data/portfolio.ts`](src/app/data/portfolio.ts). Pages only render what is declared there.

- **Add a project or role:** append to `WORK`. `primary` picks the discipline page it lives on; `also` cross-links it into others.
  Set `cv: true` on computer-vision work so it is filed under Robotics and surfaced on the Software and Games pages.
- **Video:** add a `media` entry (`youtube` or `vimeo`); it shows as a click-to-play poster.
- **Home page cards:** set `featured: true`.
- Catalog codes (SW-01, GD-03, RB-05) and positions on the home-page map are computed automatically.

## Routes

| Path | Page |
| --- | --- |
| `/` | Home: hero, map of work, index, selected work, education |
| `/software`, `/games`, `/robotics` | Discipline pages: send the relevant one to each employer |
| `/work/:id` | Detail page for any `WORK` entry |
| `/about` | Bio, coursework, honors, recognition, activities |

## Develop and deploy

```bash
npm start                              # http://localhost:4200
npm run build                          # outputs dist/p-website
npx firebase deploy --only hosting     # publish
```
