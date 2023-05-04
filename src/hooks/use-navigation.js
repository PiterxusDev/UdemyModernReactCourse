import NavigationContext from "../context/navigation";
import { useContext } from "react";

function useNavigation() {
    // const {
    //     currentPath,
    //     navigate
    // } = useContext(NavigationContext);

    // return {
    //     currentPath,
    //     navigate
    // };

    return useContext(NavigationContext);   


}


export default useNavigation;