import * as SC from "./Models.styled"
import cards from "../../data/cards.json"


export const Models = () => {
    return  <SC.Models id="models">
                <SC.List>
                    {cards.map((card) => {
                        return  <SC.Item key={card.id}>
                                    <h2>{card.id}</h2>
                                </SC.Item>
                    })}
                </SC.List>
            </SC.Models>
}