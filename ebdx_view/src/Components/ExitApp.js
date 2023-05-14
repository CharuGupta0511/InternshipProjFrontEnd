import React, { useEffect } from "react";
import './popup.css';

function ExitApp(props){

    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
          document.body.style.overflowY = "scroll";
        };
    },[]);

    function closeTab(){
        console.log("You clicked on exit");
            window.close();   
    }
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <div className="modal_close" onClick={() => props.setTrigger(false)}>&times;</div>
                <div className="modal_title">eBDView v 1.0.1</div>
                <div className="modal_content">
                <p>Do you want to exit?</p>
                </div>
                
                <div className="modal_footer">
                <button className="yes-btn" onClick={closeTab}>Yes</button>{' '}
                <button className="close-btn" onClick={() => props.setTrigger(false)}>No</button>
                </div>
                
                {props.children}
            </div>
        </div>
    ) : "";
}

export default ExitApp