import { getColorsArray } from "../constants/Colors";

const colors = getColorsArray();

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

export { getRandomColor };
