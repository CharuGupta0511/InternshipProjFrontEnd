import React, { useEffect } from "react";
import './popup.css';

function DatePopup(props){

    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
          document.body.style.overflowY = "scroll";
        };
    },[]);

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <div className="modal_close" onClick={() => props.setTrigger(false)}>&times;</div>
                <div className="modal_title">eBDView v 1.0.1</div>
                <div className="modal_content">
                <p>Start date can't be later than End date or select start date and end date both.</p>
                </div>
                
                <div className="modal_footer">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
                </div>
                
                {props.children}
            </div>
        </div>
    ) : "";
}

export default DatePopup