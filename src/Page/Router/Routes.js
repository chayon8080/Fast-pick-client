import { createHashRouter } from "react-router-dom";
import Main from '../Layout/Main'
const router = createHashRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [


        ]
    }
]);
export default router;