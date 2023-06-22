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
                        bonus = {treasures[i].bonus}
                        name={treasures[i].name}
                        description={treasures[i].description}
                        levels={treasures[i].levels}
                        treasures={treasures[i].treasures}
                    />
                    );
                }
                )
            }
        </div>
    );
}
export default CardList;