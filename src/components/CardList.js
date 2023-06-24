import React from "react";
import Card from "./Card";
import Door from "./Door";
const CardList = ({ cards, scope }) => {
    return (
        <div>
            {
                scope === 'doors' ?
                    cards.map((user, i) => {
                        return (<Door
                            key={i}
                            id={cards[i].id}
                            name={cards[i].name}
                            description={cards[i].description}
                            bad={cards[i].bad}
                            level={cards[i].level}
                        />
                        );
                    }
                    )
                    : (scope === 'treasures' ?
                        cards.map((user, i) => {
                            return (<Card
                                key={i}
                                id={cards[i].id}
                                bonus={cards[i].bonus}
                                name={cards[i].name}
                                description={cards[i].description}
                            />
                            );
                        }
                        )
                        : <div></div>
                    )
            }
        </div>
    );
}
export default CardList;