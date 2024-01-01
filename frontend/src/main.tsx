import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import { setupStore } from './redux/store';

ReactDOM.render(
    <Provider store={setupStore}>
        <App />
    </Provider>,
  document.getElementById('root')
);