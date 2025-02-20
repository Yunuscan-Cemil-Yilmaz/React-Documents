## what is this ?
React Router is one of the most popular libraries used to manage page routing in SPA (Single Page Application) structures. A simpler and more powerful structure is offered with the new features and changes that come with React Router v7.

## workflow
* Tracks the URL in the browser using the HTML5 History API.
* When the user changes the URL, React Router detects it and renders the relevant component.
* Allows route transitions without page refresh.

## setup react-router-dom
npm i react-router-dom

## place root
firstly, u should place BrowserRouter to wrap the app (app component) at root (main.jsx) generally
like this:
```
import { BrowserRouter } from 'react-router-dom';
/* 
*
*
* other codes
*
*
*/
<BrowserRouter>
  <App />
</BrowserRouter>

```

## multiple BrowserRouter
Scenarios:
    Standalone Routers:
    If different parts of the application have independent routing systems, a separate <BrowserRouter> can be used for each.
    For example, one main application and one admin panel.

    Sub-Applications (Micro-Frontend):
    If multiple React applications are running on a single page, each can have its own routing system.

    Modals or Widgets:
    If a small modal or widget inside the homepage needs its own routing system, an additional BrowserRouter can be added.

### important note:
* Redirect Conflict:
When multiple <BrowserRouter> are added, each tries to manage its own URL and conflicts may occur.
* Importance of Global Router:
In general, it is best practice to use a single main <BrowserRouter>.
It would be safer to use <Routes> and <Outlet> for subroutes.


### example:
```
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AdminApp from './AdminApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>

    <BrowserRouter basename="/admin">
      <AdminApp />
    </BrowserRouter>
  </>
);

```


### will continue (multiple BrowserRouter)
this topic will be discussed and given with examples in more detail in the following notes.

## tools
* <BrowserRouter>:	    Start route system.
* <Routes> & <Route>:	Define pages and routes.
* <Link> / <NavLink>:	Links for page tansitions.
* useParams():	        Reads dynamic URL parameters.
* useNavigate():	    Provides functional routing.
* <Navigate>:	        It is used for conditional routing.
* <Outlet>:	            Placeholder nested routes.
* ProtectedRoute:	    Control mechanism for pages requiring security.