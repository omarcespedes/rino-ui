export const setRootVariable = (name, value) => {
    document.documentElement.style.setProperty(name, value);
};

export const removeRootVariable = (name) => {
    document.documentElement.style.setProperty(name, '');
};
