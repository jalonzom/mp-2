import styled from "styled-components";
import type { Cocktail } from "../types/Cocktail";

const AllCocktails = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: #C8B6FF;
    padding: 16px;
`;

const OneCocktail = styled.div<{ alcohol: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    border-radius: 10px;
    background-color: ${(props) =>
            props.alcohol === "Alcoholic" ? "#ffd1d1" : "#d1ffe6"};
    border: 3px solid black;
    text-align: center;
    font-family: "Comic Sans MS", sans-serif;
    h2 {
        font-size: 22px;
        font-weight: bold;
        color: #3b2f5f;
        margin-bottom: 8px;
    }

    p {
        font-size: 16px;
        color: darkmagenta;
    }
    img {
        width: 80%;
        border-radius: 10px;
        margin-top: 10px;
    }
`;

export default function CocktailList(props: { data: Cocktail[] }) {
    return (
        <AllCocktails>
            {
                props.data.map((c) => (
                <OneCocktail key={c.idDrink} alcohol={c.strAlcoholic}>
                    <h2>{c.strDrink}</h2>
                    <p>{c.strCategory}</p>
                    <p>{c.strAlcoholic}</p>
                    <img src={c.strDrinkThumb} alt={c.strDrink} />
                </OneCocktail>
            ))}
        </AllCocktails>
    );
}
