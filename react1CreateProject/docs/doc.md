### check your react version:
npm list react
npm list -g react // check on global
npm list react-dom
npm list react -g react-dom // check global
npm list -g vite


### if u stuck in old versions or want to install:
npm install react@latest react-dom@latest // for project level
npm i react -g // for global level -> -g
npm i react-dom -g
npm i vite -g


### current versions: 
react: 19.0.0
react-dom: 19.0.0
npx: 8.19.4
vite: 6.1.0

### for create project 
npm create vite <project-name> -- --template react
frame-work choose -> react
variant -> js
npm create vite <project-name> -- --template react-ts
frame-work choose -> react
variant -> ts


### for downlad dependencies: 
cd _project
npm i 
or if u get dependenciy error: 
npm i -f

if u dont download dependencies or dont have node_modules folder on your project, u cant run this project

### for start project: 
(before u should be download dependencies)
cd _project
npm run dev


### note !!! : 
if u get 'operation not permited error' u can use 'sudo'