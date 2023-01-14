export const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const _2s = (string) => {
    let word = capitalize(string.replace(/_/g, ' '));
    return word;
}
