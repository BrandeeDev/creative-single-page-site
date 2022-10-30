import {PropsWithChildren} from "react";

const Layout=(props:PropsWithChildren)=>{
    return(<main className="bg-white min-h-screen  w-full  overflow-hidden">
        {props.children}

    </main>)
};
export  default Layout;