/* 
Imagine you have two asynchronous functions, fetchUserFromDatabase(userId) and fetchUserPermissions(userId),
which both return Promises.The first function retrieves user information, and the second retrieves the user's permissions 
based on their ID.
Write an async function getUserInfoAndPermissions(userId) that uses await to call 
both functions in a way that optimizes for performance
(hint: consider how you might not need to wait for one function to complete before starting the other). 
The function should return an object containing both the user information and their permissions.

This scenario tests your understanding of handling multiple asynchronous operations efficiently with async / await.
*/

async function fetchUserFromDatabase(userId) {
    return new Promise(function (resolve, reject) {
        if (!userId) {
            reject("User Id not found");
        };
        resolve({ "userName": "Aman", "email": "Testing@gmail.com" })
    });
}
async function fetchUserPermissions(userId) {
    return new Promise(function (resolve, reject) {
        if (!userId) {
            reject("User Id not found");
        };
        resolve("Admin")
    });
}

// This is what I wrote but is not optimised for performance
// async function getUserInfoAndPermissions(userId) {
//     try {
//         const userDetails = await fetchUserFromDatabase(userId);
//         const userPermissions = await fetchUserPermissions(userId);
//         console.log({ userDetails, userPermissions });
//         return { userDetails, userPermissions };
//     } catch (error) {
//         console.log(error);
//     }
// }

// OPTIMISED FOR PERFORMANCE SOLUTION HERE
async function getUserInfoAndPermissions(userId) {
    try {
        const userFetchPromise = fetchUserFromDatabase(userId);
        const permissionsFetchPromise = fetchUserPermissions(userId);

        const [userDetails, userPermissions] = await Promise.all([userFetchPromise, permissionsFetchPromise]);

        console.log({ userDetails, userPermissions });
        return { userDetails, userPermissions };
    } catch (error) {
        console.log(error);
    }
}
getUserInfoAndPermissions(1);