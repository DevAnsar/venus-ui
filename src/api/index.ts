const borrowSupllyApi = {
    list: () => {
        return fetch("https://api.venus.io/api/governance/venus" );
    }
};
export default borrowSupllyApi;
