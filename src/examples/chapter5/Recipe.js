import Instructions from "./Instructions";
import IngredientsList from "./IngredientsList";

export default function Recipe({name ="Untitled", ingredients=[], steps=[]}){
    return(
       <section id={ name.toLowerCase().replace(/ /g, "-")}>
           <h1>{name}</h1>
           <IngredientsList list={ingredients}/>
           <Instructions steps={steps} title="Cooking instructions" />
       </section>
    );

}
