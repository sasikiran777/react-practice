import logo from './logo.svg';
import './App.css';
import HelloWorld from "./1. Operations/1 hello-world";
import ReactProps from "./1. Operations/2 react-props";
import ReactPropChildren from "./1. Operations/3 react-prop-children";
import ReactEvents from "./1. Operations/5 react-events";
import ReactPropsAdv from "./1. Operations/4 react-props-adv";
import {testData} from "./general/constants";
import UseStateBasic from "./2. Use State Hook/1 use-state-basic";
import UseStateAdv from "./2. Use State Hook/2.0 use-state-adv";
import UseStateAdvSprade from "./2. Use State Hook/2.1 use-state-adv";
import UseStateAdvSpradeWithKey from "./2. Use State Hook/2.2 use-state-adv";
import UseStateAdvPrevState from "./2. Use State Hook/2.3 use-state-adv";
import UseEffectBasics from "./3. Use Effect Hook/1 use-effect-basics";
import UseEffectAdv from "./3. Use Effect Hook/2.0 use-effect-adv";
import UseEffectAdvObject from "./3. Use Effect Hook/2.1 use-effect-adv";
import UseEffectAdvCleanUp from "./3. Use Effect Hook/2.3 use-effect-adv";
import ControlledInputs from "./4. Forms/ControlledInputs";
import UnControlledInputs from "./4. Forms/UnControlledInputs";
import UseRefBasics from "./5. Use Ref/1 use-ref-basics";
import UseReducer from './6. Use Reducer'
import PropDrillingBasics from "./7. Prop Drilling/1 prop-drilling-basics";
import UseContextBasics from "./8. Use Context/1 use-context-basics";
import CustomHooksBasics from "./9. Custom Hooks/1 custom-hooks-basics";
import PropTypeBasics from "./10. Prop Type/1 prop-types-basics";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/*  React Basics Start */}
        {/*    <HelloWorld />*/}
            {/*  <ReactProps*/}
            {/*      data='This is prop data'*/}
            {/*      // name='name'*/}
            {/*  />*/}
            {/*  <ReactPropChildren data="This is children prop exmpl">*/}
            {/*      <p>*/}
            {/*          This is a child paragraph*/}
            {/*      </p>*/}
            {/*  </ReactPropChildren>*/}
            {/*  <ReactEvents />*/}
            {/*  <ReactPropsAdv { ...testData } />*/}
        {/*    React Basics End */}

      {/*    React Hooks Start */}

          {/*  React useState Hook */}
            {/*<UseStateBasic />*/}
            {/*<UseStateAdv />*/}
            {/*<UseStateAdvSprade />*/}
            {/*<UseStateAdvSpradeWithKey />*/}
            {/*<UseStateAdvPrevState />*/}

          {/*  React useEffect Hook */}
            {/*<UseEffectBasics />*/}
            {/*<UseEffectAdv />*/}
            {/*<UseEffectAdvObject />*/}
            {/*<UseEffectAdvCleanUp />*/}

          {/* React Input Handling  */}
            {/*<ControlledInputs />*/}
            {/*<UnControlledInputs />*/}
            {/*<UseRefBasics/>*/}

          {/* React Use Reducer Hook  */}
            {/*<UseReducer/>*/}

          {/* React Prop drilling  */}
            {/*<PropDrillingBasics/>*/}

          {/* React Use Context Hook  */}
            {/*  <UseContextBasics/>*/}

          {/* React Custom Hook  */}
          {/*    <CustomHooksBasics/>*/}

          {/* React Prop Types  */}
              <PropTypeBasics/>

      {/*React Hooks End */}
      </header>
    </div>
  );
}

export default App;
