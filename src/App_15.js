import { Switch, Route } from 'react-router-dom';
import Homepage_15 from './pages/Homepage_15';
import ShopTwo_15 from './pages/ShopTwoPage_15';
import ContactPage_15 from './pages/ContactPage_15';
import SigninPage_15 from './pages/SigninPage_15';

import './App_15.scss';

function App_15() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={Homepage_15} />
      <Route exact path='/shop_15' component={ShopTwo_15} />
      <Route exact path='/contact_15' component={ContactPage_15} />
      <Route exact path='/signin_15' component={SigninPage_15} />
      </Switch>
    </div>
  );
}

export default App_15;
