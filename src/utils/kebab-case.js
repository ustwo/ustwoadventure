export default string => {
    if (typeof string !== "string") {
        return string;
    }

    return string
        .replace("ö", "o") // For Malmö
        .trim()
        .replace(/&/g, "-and-")
        .replace(/\W|[_]/g, "-")
        .replace(/-{2,}/, "-")
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[\s_]+/g, "-")
        .toLowerCase();
};
