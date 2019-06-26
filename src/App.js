import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navigation from './components/navigation';
import Footer from './components/footer';
import home from './components/home';
import signin from './components/signin';
import signup from './components/signup';
import form_regis_jobseeker from './components/form_regis_jobseeker';
import notfound from './components/notfound';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" component={home} exact/>
        <Route path="/signin" component={signin}/>
        <Route path="/signup" component={signup}/>
        <Route path="/signup?reg_code=jobseeker" component={form_regis_jobseeker}/>
        <Route default component={notfound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
