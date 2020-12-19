import Header from './components/header/header.component'
import Landing from './pages/landing/landing.page'
import Learning from './pages/learning/learning.page'
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import './App.css';

function App() {
  return (
      <BrowserRouter>
          <Header />

          <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/learning" component={Learning} />
          </Switch>
      </BrowserRouter>
  )
}

export default App;
