import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {
    const CardComponent = robots.map((user, i) => {
        return (
            <Card
                key={i}
                id={user.id}
                name={user.name}
                email={user.email}
                color={user.color}
            />
        )
    })
    return (
        <div>
            {CardComponent}
        </div>
    );
}

export default CardList