var addTwoPromises = async function(promise1, promise2) {
    const first = await promise1;
    const second = await promise2;
    return first + second;
};