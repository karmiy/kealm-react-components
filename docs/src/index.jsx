import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from "react-hot-loader";
import App from './app'
import 'styles';
import '@kealm/react-components-style'

renderWithHotReload(App);

if (module.hot) {
    module.hot.accept("./app", () => {
        const App = require("./app").default;
        renderWithHotReload(App);
    });
}

function renderWithHotReload(Component) {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById("app")
    );
}
