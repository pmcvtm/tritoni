import * as React from 'react';
import * as ReactDOM from 'react-dom';

import '../styles/main.scss'
import { Header } from './header';

ReactDOM.render(
  <div id="body">

  <Header name='Tritoni' />
  {/* All of the Node.js APIs are available in this renderer process. */}
  <p>
      We are using Node.js {process.versions.node},
      Chromium {process.versions.chrome},
      and Electron {process.versions.electron}.
  </p>

  </div>, document.getElementById('app')
);
