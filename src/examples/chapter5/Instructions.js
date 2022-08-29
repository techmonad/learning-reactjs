export default function Instructions({title="Untitled",steps=[]}){
    return(
        <section>
            <ul className="instructions">
                <h2>{title}</h2>
                {steps.map((step, i) =>(<li id={i.toString()}>{step}</li>) )}
            </ul>
        </section>
    );
}