# Technical guidelines for final project

## Github

- main branch for final product (production version -> what is deployed)
- develop version for the developing process ("main" for developing -> at beginning boilerplate with added packages)
- develop will be merged with main before deploying new version (develop needs to work!)
- for implementing any features, create a new branch with prefixes features: **feature/feature-name** (for example feature/map-view)
- for every feature new branch! (can be created from the previous one)
- for debugging, create a new branch with prefix bug: **bug/name** (for example bug/wrong-display-for-map-view)
- for the final reviews use prefixes **layout-review** and **code-review**
- Pull Requests are reviewed and approved just by one person (Alice)
- if you get comment to your pull request, fix the things and push once again the same branch

## Tools & Technologies

**Frontend:**

- React functional components (Hooks)
- React context for the sharing state variables (like isLogged flag, role...)?
- order stored in Session storage
- react components/styled components with extension `.jsx`
- google maps API + geocoding

**Backend:**

- Express.js - use of app.js from express generator (generate with generator and then make changes for our structure - create server.js, put out hbs etc.)
- basic file structure for deploying on heroku
- all secrets (db url, JWT secret) from beginning in .env file (add .env will be on .gitignore!)
- routes for users, listings, cafes, messages/notifications?
- for every request that is done by logged user is necessary to verify token (authentication middleware)
- use middlewares for data validation, authentication of token (viz. Alice's fullstack register), uploading of the image, etc. - make code more readable and cleaner

**Packages:**

Axios, Multer, jasonwebtoken, dotenv, bcrypt, cors, mongoose, uuid, react-router-dom, styled components, styled icons, react-router-hashlink (for internal linking through page), @react-google-maps/api.

**VSCode:**

- enable prettier for code formatting
- enable eslint for the error displays especially for React!

## HTML

- use semantic tags from beginning! Eliminate divs
- add alt to the images (at least something generic, it can be also name of the cake etc....)
- use labels for inputs, not just place holders (or at least use aria-label in that case!)
- do not disable focus!
- use anchor tag when redirecting to another page or button when click event - not both at once :)

## Styling

- using [Styled components](https://styled-components.com/) with props for styling
- at beginning, defining Global style - colors, breakpoints, sizes of the white spaces, fonts etc.
- try to make the styling as responsive as possible from beginning:
  - avoid definition of height, use paddings instead of
  - use [combination of width and max-width](https://blog.prototypr.io/what-even-is-the-difference-between-width-and-max-width-8f37b282c7f1) if something should be not too big on bigger screens (width in %, max-width in px)
  - use flex with wrapping for example for lists items etc.
- units best praxis:
  - `rem` for font size (can then be changed just in root)
  - variables defined in `em` for padding/margins/spacings - proportional everytime to font size
  - px for widths/heights/positions that should be absolute, not changeable

## Axios

- handle the errors from axios (usually errors caused by some problem on BE side, not caused by not getting user from DB etc.) => display OutOfOrder component

## Handling data from FE

- all input data from FE needs to go through validation on BE - needs to be trimmed and escaped
- **use validControllers middleware in each router that deals with data from FE!**

## Directory Structure

```

├── .vscode
│   └── launch.json
├── client
│   ├── build
│   │   └── ...
│   ├── node_modules
│   │   └── ...
│   ├── public
│   │   └── ...
│   ├── src
│   │   ├── assets
│   │   │   └── ...
│   │   ├── pages
│   │   │   └── ...
│   │   ├── components
│   │   │   └── ...
│   │   ├── styledComponents
│   │   │   └── ...
│   │   ├── ProtectedRoutes.js
│   │   ├── Context.js
│   │   ├── App.jsx
│   │   └── index.jsx
│   ├── .env.local
│   ├── package.json
│   └── package-lock.json
├── controllers
│   ├── authControllers.js
│   ├── listingControllers.js
│   ├── multerControllers.js
│   └── validControllers.js
├── models
│   ├── ListingModel.js
│   └── UserModel.js
├── node_modules
│   └── ...
├── routes
│   ├── listings.js
│   ├── cities.js
│   ├── cafes.js
│   ├── index.js
│   └── users.js
├── uploads
├── .env
├── .gitignore
├── app.js
├── LICENSE
├── package.json
├── package-lock.json
├── requests.rest
├── README.md
├── server.js
└── technical-guidelines.md


```

- `.vscode/launch.json` - configuration for the debugging of node (using nodemon)
- `controllers` - middlewares for authentication of the access, svaing images using multer, getting the date for reactivation of listings and validation of the data
- `models` - model of user and listing database record in Mongoose
- `routes` - routes for backend APIs
- `uploads` - everything that users upload - profile images, images for listings etc.....
- `.env`- environment file to store all of the secret (everything that can not go to GH!)
- `app.js` - basic structure of server from express generator
- `server.js` - server creation and port assignment (port 5000 by default)
- `client` - frontend of our app:
  - `build` - builded version of React app that is served by server
  - `src` - source for react app:
    - `assets` - all images needed for creation of the frontend
    - `pages` - react components that creates the page - have their own route in react-router-dom (with `.jsx` extension)
    - `components` - individual React components that creates just part of the page and are often reusable (with `.jsx` extension)
    - `styledComponents` - all styled components + Global Style (extension `.jsx`), files with breakpoints, colors etc. variables (extension `.js`)
    - `Context.js` - file with created context for the whole application
    - `ProtectedRoutes.js` - Route component that has protection according to the isnerted condition
    - `App.jsx` - main component of the whole app (it gives context to the all components)
    - `index.jsx` - rendering of the app
