const fs = require("fs");
const { promisify } = require("util");

const writeFile = promisify(fs.writeFile);

async function main() {
    await writeFile("/fs/manju-async-await.js",
        "console.log('Hello world with promisify and async/await!');");

    console.info("file created successfully with promisify and async/await!");
}

main().catch(error => console.error(error));