# Technical guidelines for final project

## Github

- main branch for final product (production version -> what is deployed)
- develop version for the developing process ("main" for developing -> at beginning boilerplate with added packages)
- develop will be merged with main before deploying new version (develop needs to work!)
- for implementing any features, create a new branch with prefixes features: **feature/feature-name** (for example feature/map-view)
- for every feature new branch! (can be created from the previous one)
- for debugging, create a new branch with prefix bug: **bug/name** (for example bug/wrong-display-for-map-view)
- Pull Requests are reviewed and approved just by one person (Alice)
- if you get comment to your pull request, fix the things and push once again the same branch

## Tools & Technologies

**Frontend:**

- React functional components (Hooks)
- React context for the sharing state variables (like isLogged flag, role...)?
- order stored in Local/Session storage

**Backend:**

- Express.js - use of app.js from express generator (generate with generator and then make changes for our structure - create server.js, put out hbs etc.)
- basic file structure for deploying on heroku
- all secrets (db url, JWT secret) from beginning in .env file (add .env will be on .gitignore!)
- routes for users, listings, messages/notifications?
- use middlewares for data validation, authentication of token (viz. Alice's fullstack register) - make code more readable and cleaner

**Packages:**

Axios, Multer, jasonwebtoken, dotenv, bcrypt, cors, mongoose, uuid?, react-router-dom, styled components, styled icons, react-router-hashlink (for internal linking through page), ant-design (antd).....

**VSCode:**

- enable prettier for code formatting
- enable eslint for the error displays especially for React!

## HTML

- use semantic tags from beginning! Eliminate divs
- add alt to the images (at least something generic, it can be also name of the cake etc....)
- use labels for inputs, not just place holders (or at least use aria-label in that case!)
- do not disable focus

## Styling

- using [ant design](https://ant.design/components/overview/) for finished components to save a time
- using [Styled components](https://styled-components.com/) with props for styling
- at beginning, defining Global style - colors, breakpoints, sizes of the white spaces, fonts etc.
- try to make the styling as responsive as possible from beginning:
  - avoid definition of height, use paddings instead of
  - use [combination of width and max-width](https://blog.prototypr.io/what-even-is-the-difference-between-width-and-max-width-8f37b282c7f1) if something should be not too big on bigger screens (width in %, max-width in px)
  - use flex with wrapping for example for lists items etc.
