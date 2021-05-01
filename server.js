
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while (true) {
    const country = process.env.FavoriteCountry;
    console.log(`My favorite country is ${country}`);
    await sleep(5000);
  }
}

main();
