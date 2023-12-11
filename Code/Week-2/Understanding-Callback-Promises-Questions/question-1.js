/*
Imagine you have an async function fetchUserData(userId) that fetches user data from a database based 
on the provided user ID. This function returns a JavaScript object with user details.
Write a function getUserDetails(userId) that calls fetchUserData 
and logs the user's name and email. 
Handle any potential errors gracefully.
*/

/*
Imagine you have an async function fetchUserData(userId) that fetches user data from a database based 
on the provided user ID. This function returns a JavaScript object with user details.
Write a function getUserDetails(userId) that calls fetchUserData 
and logs the user's name and email. 
Handle any potential errors gracefully.
*/

async function fetchUserData(userId) {
    //Make DB Call
    if (!userId) {
        throw new Error(`User id not provided by the user`);
    }
    const userDetails = {
        name: "dummy-123",
        email: "test@gmail.com",
    };
    return userDetails;
}

async function getUserDetails(userId) {
    try {
        const userDetails = await fetchUserData(userId);
        console.log("User Name is:- ", userDetails.name);
        console.log("User Email is:- ", userDetails.email);
    } catch (error) {
        console.log(error.message);
    }
}

getUserDetails(1);
// getUserDetails();
