import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as singleSpa from 'single-spa';
import {registerResumeApp} from "./apps/resume-app";
import {registerCompanyApp} from "./apps/company-app";
// import {registerAngularApp} from "./apps/angular-app";

ReactDOM.render(<App/>, document.getElementById('root'));


// registerAngularApp();
registerResumeApp();
registerCompanyApp();

singleSpa.start();
