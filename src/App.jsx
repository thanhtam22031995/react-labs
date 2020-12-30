import CounterFeature from 'features/Counter';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import ThemeContext, { themes } from 'themeContext';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import NotFound from './components/NotFound';
import HomePage from './features/Home';
import MagicBoxFeature from './features/MagicBox';
import PostsFeature from './features/Post';
import RenderingFeature from './features/Rendering';
import StudentFeature from './features/Student';
import TodoFeature from './features/Todo';

function App() {
  const [currentTheme, setCurrentTheme] = useState(themes.light);
  const value = { currentTheme, setCurrentTheme };

  return (
    <div>
      <ThemeContext.Provider value={value}>
        <Header />

        {/* Routing Content */}
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/box" component={MagicBoxFeature}></Route>
          <Route path="/rendering" component={RenderingFeature}></Route>
          <Route path="/students" component={StudentFeature}></Route>
          <Route path="/posts" component={PostsFeature}></Route>
          <Route path="/todos" component={TodoFeature}></Route>
          <Route path="/counter" component={CounterFeature}></Route>

          <Route component={NotFound}></Route>
        </Switch>

        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
