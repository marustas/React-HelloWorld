import React from "react";
import Card from "./Card";
const CardList = ({ treasures }) => {
    return (
        <div>
            {
                treasures.map((user, i) => {
                    return (<Card
                        key={i}
                        id={treasures[i].id}
                        name={treasures[i].name}
                        description={treasures[i].description}
                    />
                    );
                }
                )
            }
        </div>
    );
}
export default CardList;