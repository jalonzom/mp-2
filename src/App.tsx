import { useEffect, useState } from "react";
import type { Cocktail } from "./types/Cocktail";
import CocktailList from "./components/CocktailList";

export default function App() {
    const [data, setData] = useState<Cocktail[]>([]);

    useEffect(() => {
        async function fetchData() {
            const rawData = await fetch(
                "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
            );
            const { drinks } = await rawData.json();
            setData(drinks || []);
        }

        fetchData()
            .then(() => console.log("Cocktails fetched"))
            .catch((e) => console.log("Error:" + e));
    }, []);

    return (
        <div>
            <CocktailList data={data} />
        </div>
    );
}
