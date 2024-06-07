import { createRoot } from 'react-dom/client';

import { App } from 'src/components';

import 'src/styles/reset.css';
import 'src/styles/styles.css';

const root = createRoot(document.querySelector('#root')!);
root.render(<App />);
