import MainPage from "../pages/components/MainPage/MainPage.jsx";
import {Provider} from "react-redux";
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import {setupStore} from "../widgets/api/store/Store.jsx";
import PostPage from "../pages/components/PostPage/PostPage.jsx";
import "normalize.css"
import './App.css'

function App() {

    const store = setupStore()

    return (
        <Provider store={store}>
            <div className="wrapper">
                <BrowserRouter basename={"/picasso-react"}>
                    <Routes>
                        <Route path={"/post/:id"} element={<PostPage/>}/>
                        <Route path={"/"} element={<MainPage/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </Provider>
    )
}

export default App
