export const getHomeListing = async () => {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/Posts'
        );
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}