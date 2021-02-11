import Header from './components/header/header.component';
import Landing from './pages/landing/landing.page';
import Learning from './pages/learning/learning.page';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Footer from './components/footer/footer.component';
import './App.scss';

function App() {
    return (
        <BrowserRouter>
            <Header />

            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/learning" component={Learning} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
