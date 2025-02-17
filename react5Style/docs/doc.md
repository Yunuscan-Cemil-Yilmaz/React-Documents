### adding style techs
we vill use scss, bootsrap and aletrifyjs 
u can use other style techs like this.

### sass 
npm i sass
and create files
import app.jsx
not make any configuration

### bootstrap
npm i bootstrap
u should import bootstrap's css and js file at your index.jsx 
(index.jsx is main.jsx after react 18)
if u want u can do this on app.jsx but index.jsx is the first element that runs when the application runs, it is more common to import it here.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

if u are on locale: 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

### alertify
npm i alertifyjs
u should import this too. u can import like bootstrap (same way) : 
import 'alertifyjs/build/css/alertify.min.css';

if you are on locale
import '../node_modules/alertifyjs/build/css/alertify.min.css';