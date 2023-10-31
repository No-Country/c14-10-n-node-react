import { useState } from "react";
import CardCredit from "../../../components/CardCredit"
import CardFormAdd from "./CardFormAdd";
import MyCards from "./MyCards";

export default function CardsPage() {
    const [addCardFormActive,setAddCardFormActive] = useState(false);
    return (
        <section className="px-2 md:px-10 py-2 w-full">
            {
                addCardFormActive ? (
                    <CardFormAdd setAddCardFormActive={setAddCardFormActive} />
                ) : (
                    <MyCards setAddCardFormActive={setAddCardFormActive} />
                )
            }
            
        </section>
    )
}
