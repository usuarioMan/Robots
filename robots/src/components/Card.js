import React from "react";

const Card = ({name, email, id, color}) => {
    return(
        <div className={`${color} tc dib br4 pa3 ma3 grow bw2 shadow-3`}>
            <img src={`https://robohash.org/${id}?200x200`} alt="Robot photo"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;