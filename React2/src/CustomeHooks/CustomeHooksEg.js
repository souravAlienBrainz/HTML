import { useContext } from "react";
import ContextEx from "../Context/ContextEx";

function useContextEx(){

    return useContext(ContextEx)
}
export default useContextEx;

/************************
 * console.log(useContextEx().name) use in App.js
 * *************************/