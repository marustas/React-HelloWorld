import React from "react";
import Card from "./Card";
const CardList = ({ cards }) => {
    return (
        <div>
            {
                cards.map((user, i) => {
                    return (<Card
                        key={i}
                        id={cards[i].id}
                        bonus = {cards[i].bonus}
                        name={cards[i].name}
                        description={cards[i].description}
                        bad={cards[i].bad}
                        levels={cards[i].levels}
                        treasures={cards[i].treasures}
                        power={cards[i].power}
                    />
                    );
                }
                )
            }
        </div>
    );
}
export default CardList;