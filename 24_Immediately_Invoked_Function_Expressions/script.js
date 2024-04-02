(function chai() {
    console.log("DB is connected")
})();   // we add semicolor or stop.

// chai()


(() => {
    console.log("DB is connected successfully.");
})();


(function ye() {
    console.log("Another function is called automatically.")
})();

((name) => {
    console.log(`Another function is called automatically.${name}`)
})("Arbaz");