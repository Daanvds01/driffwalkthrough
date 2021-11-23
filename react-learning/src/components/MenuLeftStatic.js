import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { popupactive, popupnonactive } from "../actions";
import popupvideo from '../reducers/popupvideo';

function MenuLeftStatic() {
    const dispatch = useDispatch();
   
    function popupactivate() {
        dispatch(popupactive());
        console.log(popupactive);

      }
    return (
        <div>
            <div className="FavoriteWSpace">Favorite Workspace</div>
            <div className="FavoriteWSpaceText">Add your favorite WorkSpaces here!</div>
            <div className="StartBrowsingText">Start browsing...</div>
            <div className="Videobutton"  onClick={popupactivate}><button id="videobtn">Get driff here</button></div>
        </div>
    
    )
}

export default MenuLeftStatic
