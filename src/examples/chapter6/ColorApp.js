import {useState} from "react";
import {FaStar, FaTrash} from "react-icons/fa";
import colorData from "../../data/colors.json"

const createArray = length => [...Array(length)]

export default function ColorApp() {
    const [colors, setColors] = useState(colorData);

    const removeColor = id => {
        const newColors = colors.filter(color => color.id !== id);
        setColors(newColors);
    };

    const rateColor = (id, rating) => {
        const newColors = colors.map(color =>
            color.id === id ? { ...color, rating } : color
        );
        setColors(newColors);
    };

    return (
        <ColorList
            colors={colors}
            onRemoveColor={removeColor}
            onRateColor={rateColor}
        />
    );
}


function ColorList({
                       colors = [],
                       onRemoveColor = f => f,
                       onRateColor = f => f
                   }) {
    if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;

    return (
        <div>
            {colors.map(color => (
                <Color
                    key={color.id}
                    {...color}
                    onRemove={onRemoveColor}
                    onRate={onRateColor}
                />
            ))}
        </div>
    );
}


function Color({id, title, color, rating, onColorRemove= f => f, onColorRate = f => f }){
    return(
        <section>
            <h1> {title}</h1>
            <button onClick={() => onColorRemove(id)}> <FaTrash/></button>
            <div style={ {height: 50, backgroundColor: color}}/>
            <StarRating2 starRating={rating} onRate={rating => onColorRate(id,rating)} />
        </section>

    )

}


function StarRating2({
                         totalStars = 5,
                         selectedStars = 0,
                         onRate = f => f
                     }) {
    return (
        <>
            {createArray(totalStars).map((n, i) => (
                <Star2
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => onRate(i + 1)}
                />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </>
    );
}


function Star2({ selected = false, onSelect = f => f }) {
    return <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />;
}
