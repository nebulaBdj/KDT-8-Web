import { useState } from "react";

export default function Toggle(){
    const [status, setStatus] = useState(false);

    const handT = () => {
        if(status === false){
            setStatus(true);
        } else {
            setStatus(false);
        }
    }

    return(
        <div>
            <p>{status && '보여라'}</p>
            <button onClick={handT}>토글</button>
        </div>
    )
}