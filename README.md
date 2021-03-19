# cag-nextjs

Replica of [Cornerstone-Church/CAG-MainWebsite](https://github.com/Cornerstone-Church/CAG-MainWebsite) created with nextjs.

## Development

Make sure [node.js](https://nodejs.org/en/) is installed. You can check installation by running `node --version`.

Afterwards, install required packages by running `npm i` in the projects root directory.

To start dev server execute `npm run dev` in the projects root directory. Any changes to the source files will automatically update the server.

## File Structure

```
.
├── public                   - files automatically served and can be referenced using '/' as the start of url
├── src                      - source files
|    ├── components
|    |     ├── shared        - shared components used by other components and pages
|    |     ├── ...           - all other pages with their page specific components
|    |
|    ├── contexts            - all react contexts go here and each provider is implmented in contexts/index.js
|    ├── pages
|    |     ├── _app.js       - react component used to initialize every page (good for headers and footers)
|    |     ├── _document.js  - used to augment structure the initial <html> and <body> tags
|    |     ├── ...           - see pages below
|    |
|    ├── styles              - global styles used accross application (import them into pages/_app.js)
```

## pages

In Next.js, a page is a React Component exported from a .js file in the pages directory. Each page is associated with a route based on its file name.

Example: If you create pages/about.js that exports a React component like below, it will be accessible at /about.

```javascript
export default About from '../components/About'
```

## styles

You can style a component by creating a `[name]`.module.scss file. `[name]` can be anyting but typically is `style` for default component styles. Styles use [scss syntax(https://sass-lang.com/documentation/syntax). To implement a scss file, import it into a component and access it's classes by it's object properties. See example below.

`style.module.scss`:
```scss
.redButton {
  color: black;
  background-color: red;
}
```

`index.js`:
```javascript
import style from './style.module.scss'

export default function RedButton() {
  return (
    <button className={style.redButton}>
      Hello World!
    </button>
  );
}
```
