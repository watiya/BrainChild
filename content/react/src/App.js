import { Routes, Route } from "react-router-dom";
import "./styles/app.sass";
import Page from "./components/Page";
import Home from "./screens/Home";
import Features from "./screens/Features";
import Pricing from "./screens/Pricing";
import Download from "./screens/Download";
import Class01 from "./screens/Class01";
import Class01Details from "./screens/Class01Details";
import Class02 from "./screens/Class02";
import Class02Details from "./screens/Class02Details";
import Lifestyle from "./screens/Lifestyle";
import Article from "./screens/Article";

function App() {
    return (
        <Routes>
            <Route path="/">
                <Route
                    index
                    element={
                        <Page>
                            <Home />
                        </Page>
                    }
                />
                <Route
                    path="features"
                    element={
                        <Page>
                            <Features />
                        </Page>
                    }
                />
                <Route
                    path="pricing"
                    element={
                        <Page>
                            <Pricing />
                        </Page>
                    }
                />
                <Route
                    path="download"
                    element={
                        <Page>
                            <Download />
                        </Page>
                    }
                />
                <Route
                    path="class01"
                    element={
                        <Page>
                            <Class01 />
                        </Page>
                    }
                />
                <Route
                    path="class01-details"
                    element={
                        <Page>
                            <Class01Details />
                        </Page>
                    }
                />
                <Route
                    path="class02"
                    element={
                        <Page>
                            <Class02 />
                        </Page>
                    }
                />
                <Route
                    path="class02-details"
                    element={
                        <Page>
                            <Class02Details />
                        </Page>
                    }
                />
                <Route
                    path="lifestyle"
                    element={
                        <Page>
                            <Lifestyle />
                        </Page>
                    }
                />
                <Route
                    path="article"
                    element={
                        <Page>
                            <Article />
                        </Page>
                    }
                />
            </Route>
        </Routes>
    );
}

export default App;
