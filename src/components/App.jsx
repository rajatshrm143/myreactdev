import React, { createContext } from "react";
import MultipleElements from './MultipleElements';
import Fragement from './Fragement';
import Styling from './Styling';
import Expressions from './Expressions';
import TemplateLiterals from './TemplateLiterals';
// import firstName, { giveFullName, address, portalCode, favMovie } from './ImportExport'; 
import * as result from "./ImportExport"; // OR
import Props from "./Props";
import ArrData from "./ArrData";
import Arraycard from "./Arraycard";
import UseStateHook from "./UseStateHook";
import Form from './Form';
import ComplexForm from './ComplexForm';
import ContextAPIHook from './ContextAPIHook';
import UseEffectHook from "./UseEffectHook";
import AxiosAPI from './AxiosAPI';
import NavMenu from './NavMenu';
import ReduxStateMgmt from './ReduxStateMgmt';
import store from './Redux/store';
import { Provider } from 'react-redux'; // it connects the redux to react
import { MuiTypography } from "./MaterialUI/MuiTypography";
import MuiButton from "./MaterialUI/MuiButton";

const FName = createContext();
const LName = createContext();

// 'getState()' contains the current value of state & 'subscribe' works as a 'store' change listner
store.subscribe(() => { console.log(store.getState()) });

function App() {

    return (
        <>
            <><MultipleElements /></> {/* returns JSX */}
            <Fragement />             {/* returns React Fragement */}
            <Styling />               {/* returns React Fragement */}
            <Expressions />           {/* returns React Fragement */}
            <TemplateLiterals />      {/* returns React Fragement */}

            {/* Fechting data/variables from different file/component */}
            {/* <ol>                  
                <li>{firstName}</li>
                <li>{giveFullName()}</li>
                <li>{address}</li>
                <li>{portalCode()}</li>
                <li>{favMovie}</li>
            </ol> */}
            {/* OR */}
            <ol >
                <li>{result?.default}</li>
                <li>{result?.giveFullName()}</li>
                <li>{result?.address}</li>
                <li>{result?.portalCode()}</li>
                <li>{result?.favMovie}</li>
            </ol>

            {/* Send data to the component, through custom Properties(called Props in react) */}
            <Props fName="Rajat" lName="Sharma" fullName="Rajat Sharma" />

            {/* Using array & map method to display data */}
            {ArrData.map((val, index) => {
                return (
                    <Arraycard
                        key={index.toString()}
                        fullName={val?.fullname}
                        address={val?.address}
                    />
                )
            })}

            {/* If/else condition in JSX */}
            <ShowCondition />

            {/* useState hook in react (functional component) */}
            <UseStateHook />

            {/* Form in React */}
            <Form />

            {/* ComplexForms with multiple input fields in React */}
            <ComplexForm />

            {/* Using Context API to send data directly to child's child component */}
            {/* Context is treated as custom components & used with Provider to send data */}
            <FName.Provider value="Rajat">
                <LName.Provider value="Sharma">
                    <ContextAPIHook />  {/* Child Component of App (parent) */}
                </LName.Provider>
            </FName.Provider>

            {/* Using useEffect Hook, triggered after DOM render and after every DOM update */}
            <UseEffectHook />

            {/* Using Axios tool to make API calls */}
            <AxiosAPI />

            {/* Using Routes in React */}
            <NavMenu />

            {/* Implementing Redux Store */}
            {/* 'Provider' connects the redux to react, to do so we pass the 'store' as a prop */}
            <Provider store={store}>
                <ReduxStateMgmt />
            </Provider>

            {/* Material UI components */}

            <MuiTypography />
            <MuiButton />
        </>
    );
}

const ShowCondition = () => {
    if (Math.random() < 2) {
        return (
            <>
                <p style={{ color: 'green' }}><span>This is true condition</span></p>
            </>
        )
    }
    else {
        return <>
            <p><span style={{ color: 'red' }}>This is false condition</span></p>
        </>
    }
}



export default App;
export { FName, LName };