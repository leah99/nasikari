import {Input, Button} from './components'
import './App.scss';

function App() {
  return (
    <div className="login">
        <div className="login__input">
          <Input
            label="EMAIL ADDRESS"
            name="email"
            id="emailAddress"
            placeholder="Please enter email address"
            errorMessage="Invalid email address"
          />
          <Input
            label="PASSWORD"
            name="password"
            id="password"
            type="password"
            placeholder="Please enter password"
            errorMessage="Invalid password"
          />
        </div>
        <div className="login__button">
          <Button />
          {/* <Button
            type="submit"
            name="log-in"
            value="Log In"
            onButtonSubmit={this.onSubmit}
          /> */}
        </div>
    </div>
  );
}

export default App;
