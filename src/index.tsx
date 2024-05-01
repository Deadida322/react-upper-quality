import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from "./theme/ThemeProvider";
const root = createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
        <BrowserRouter>
            <App></App>
        </BrowserRouter>
    </ThemeProvider>
)