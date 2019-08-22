import * as singleSpa from "single-spa";
import {matchingPathname, runScript} from "./utils";

const loadCompanyApp = async () => {
    await runScript('http://localhost:3001/static/js/main.js');
    return window.reactApp;
};


export const registerCompanyApp = () => {
    singleSpa.registerApplication('company-app', loadCompanyApp, matchingPathname(['/company', '/']));
};