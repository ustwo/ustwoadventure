export default string => {
    if (typeof string !== "string") {
        return string;
    }

    return string
        .replace("ö", "o") // For Malmö
        .trim()
        .replace(/\W|[_]/g, "-")
        .replace(/-{2,}/, "-")
        .replace(/&/g, "and")
        .toLowerCase();
};
