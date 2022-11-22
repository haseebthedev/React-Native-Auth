export const getHomeListing = async (setLoading: (status: boolean) => void) => {
    try {
        setLoading(true)
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/Posts'
        );
        const json = await response.json();
        setLoading(false)
        return json;
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false)
    }
}