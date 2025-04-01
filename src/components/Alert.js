import React from "react";
                                                                             
export default function Alert(props){
    const capitalize = (word)=>{
        let lower = word.toLowerCase(); 
        return lower.charAt(0).toUpperCase() + lower.slice(1); 
    }                                                                          
    return (                                                        
        <>   

        <div style={{height: '50px'}}> 
        <div class="alert-class alert alert-warning alert-dismissible fade show text-center" role="alert">
            <strong>{props.alert.type}</strong>{props.alert.msg}
        </div>
        </div>

        </>
    );
}