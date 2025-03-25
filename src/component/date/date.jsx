import { useState } from "react";
import moment from "moment";
export function DateTime(){
var [mfd]=useState(Date());
return(
    <div className="container-fluid">
        <p>{moment(mfd).format('dddd MM yyyy')}</p>
    </div>
);
}