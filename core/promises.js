// callback
function asyncWithCallbacks(callback1, callback2) {
    setTimeout(function() {
        callback1("callback 1");
    }, 2000);
    setTimeout(function() {
        callback2("callback 2");
    }, 4000);
}

asyncWithCallbacks(
    function(data) {
        console.log("CALLBACK", data);
    },
    function(data) {
        console.log("CALLBACK", data);
    }
);

// setTimeout(function(){ code },duration);

function asyncWithPromise() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("RESOLVED");
        }, 2000);
        setTimeout(function() {
            reject("REJECTED");
        }, 4000);
    });
}

asyncWithPromise()
    .then(function(data) {
        console.log("PROMISE", data);
    })
    .catch(function(err) {
        console.log("PROMISE", err);
    });

//ASYNCC & AWAIT
async function testAsync() {
    try {
        const data = await asyncWithPromise();
        console.log("ASYNC AWAIT", data);
    } catch (e) {

        console.log("ASYNC ERROR", e);
    }

}

testAsync();