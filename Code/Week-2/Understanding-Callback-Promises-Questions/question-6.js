/* 
Write an async function aggregateData(sources) that takes an array of URLs(sources).
Each URL is an endpoint that returns JSON data when called.Your function should:
Fetch data from all URLs in parallel using asynchronous requests.
Aggregate all the JSON results into a single array.
If any of the requests fail, the function should return null.

Ensure that the function does not wait for all requests to complete if one fails.
In other words, as soon as one request fails, the function should stop processing and return null.

This question tests your ability to handle multiple asynchronous operations efficiently, 
with the added complexity of error handling and early termination of operations.
Consider using Promise.allSettled or similar constructs to handle these scenarios.
*/

const sources = [
    'https://api.example.com/data1',
    'https://api.example.com/data2',
    'https://api.example.com/data3',
    'https://api.example.com/data4'
];

async function aggregateData(sources) {
    try {
        const promises = sources.map(url => fetch(url).then(response => response.json()));

        const results = await Promise.allSettled(promises);
        const aggregatedData = [];
        for (const result of results) {
            if (result.status === 'rejected') {
                return null;
            }
            aggregateData.push(result.value);
        }
        console.log(aggregatedData);
        return aggregatedData;
    } catch (error) {
        console.log(error);
        return null;
    }
}