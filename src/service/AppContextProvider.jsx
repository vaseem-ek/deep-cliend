import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const AppContext = createContext()


const AppcontextProvider = ({ children }) => {
    // const Backend_Url = 'http://localhost:3000'
    const Backend_Url = 'https://deep-server-flag.onrender.com'
      const [menuData,setMenuData]=useState([])
    

    const getAllMenu=async()=>{
        try {
            const {data}=await axios.get(Backend_Url+'/get-all')
            // console.log(data);
            if(data.success){
                setMenuData(data.menus)
            }else{
                console.log(data.message);
                
            }
            
        } catch (error) {
            console.log(error.message);
            
        }
    }
    useEffect(()=>{
        getAllMenu()
    },[])

    const value = {
        Backend_Url,
        menuData,setMenuData,
        getAllMenu,
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppcontextProvider