 
//  import EmailMain from "../components/EmailMain";
// import Main from "../pages/Main";
import { lazy } from "react";

const Main = lazy( () => import('../pages/Main'))
const EmailMain = lazy( () => import('../components/EmailMain'))
const ViewEmails = lazy( () => import('../components/ViewEmails'))

 const routes = {
    main :{
        path : "/",
        element : Main
    },
    emails :{
        path : "/emails",
        element : EmailMain
    },
    view :{
        path : "/view",
        element : ViewEmails
    },
    invalid :{
        path : "/*",
        element : EmailMain
    }
 }

 export {routes} 