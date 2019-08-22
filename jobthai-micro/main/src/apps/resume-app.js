import * as singleSpa from "single-spa";
import {matchingPathname, runScript} from "./utils";

const loadResumeApp = async () => {
    await runScript('http://localhost:3002/static/js/main.js');
    return window.reactApp;
};


export const registerResumeApp = () => {
    singleSpa.registerApplication('resume-app', loadResumeApp, matchingPathname(['/resume', '/']));
};