
// helper function to format user input correctly
const nameFormatter = name => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

module.exports = nameFormatter;