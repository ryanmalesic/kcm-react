import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar';
import Upload from './pages/Upload';
import CategoryViewDemo from './pages/CategoryViewDemo';
import MissingItems from './pages/MissingItems';

const App: React.FC = () => (
  <Router>
    <div className="flex flex-col h-screen antialiased bg-gray-100">
      <Navbar />
      <div className="inline-block overflow-auto">
        <div className="p-6 space-y-6">
          <Switch>
            <Route exact path="/upload">
              <Upload />
            </Route>
            <Route exact path="/categories/demo">
              <CategoryViewDemo />
            </Route>
            <Route exact path="/missing-items">
              <MissingItems />
            </Route>
            <Route path="*">
              <Redirect to="/missing-items" />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  </Router>
);

export default App;
