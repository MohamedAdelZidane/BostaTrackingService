import axios from 'axios';
// import { browserHistory } from "react-router-dom";
import { browserHistory } from 'react-router'




var trackingNumber;

export const RecieveProps = (props) => {
    const { sendTrackingNumber } = props
    trackingNumber = sendTrackingNumber;
    return (
        <div>
        </div>
    )

}

export const APICalls = (config, callback, errorcallback) => {
    // console.log(trackingNumber)
    const url = `https://tracking.bosta.co/shipments/track/${trackingNumber}`;
    // console.log(url)
    axios.get(url, config)
        .then(res => {
            console.log(res.data)
            if (callback != null) {
                callback(res);
            }
        })
        .catch(err => {
            if (errorcallback != null) {
                errorcallback(err);
                
            }
        })
        
}







