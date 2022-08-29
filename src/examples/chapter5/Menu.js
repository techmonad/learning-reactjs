import Recipe from "./Recipe";

export default function Menu({title, recipes}) {
    return(
        <article>
            <header>
                <h1>{title}</h1>
            </header>
            <div className="recipes">
                {recipes.map((recipe,i) => <Recipe id={i} {...recipe} />)}
            </div>
        </article>
    );
}
