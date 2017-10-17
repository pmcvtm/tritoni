import * as React from 'react';
import * as ReactDOM from 'react-dom';

ReactDOM.render(
<div id="body">

<h1>Hello World!</h1>
{/* All of the Node.js APIs are available in this renderer process. */}
<p>
    We are using Node.js {process.versions.node},
    Chromium {process.versions.chrome},
    and Electron {process.versions.electron}.
</p>


</div>, document.getElementById('app'));
