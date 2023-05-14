import React, { useEffect } from "react";
import './popup.css';

function About(props){

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
                <p>eBusiness Documents view version 1.0.1</p>
                </div>
                
                <div className="modal_footer">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
                </div>
                
                {props.children}
            </div>
        </div>
    ) : "";
}

export default About