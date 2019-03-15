import './html-equal.js';

import './functions/make-brew-canvas.test.js';
import './functions/query-components.test.js';
import './functions/spaces.test.js';
import './functions/make-user-template.test.js';
import './functions/object-to-array.test.js';

// add this import from our firebase.js module:
import { app } from '../src/firebase/firebase.js';
import './html-equal.js';

// add this line that cleans up firebase when test suite is done:
QUnit.done(() => {
    app.delete();
});