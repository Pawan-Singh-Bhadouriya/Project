



let compareData = null;

async function priceComparison() {
    // const url = 'https://price-comparison1.p.rapidapi.com/611247373064/offers?latitude=37.777805&longitude=-122.49493&country=US';
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '4308455532mshf236c29a3b2c97ep171863jsn1bf99e393059',
    //         'X-RapidAPI-Host': 'price-comparison1.p.rapidapi.com'
    //     }
    // };

    // try {
    //     console.log("Fetching data...");
    //     const response = await fetch(url, options);
    //     if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //     }
    //     console.log("Response received, parsing JSON...");
    //     const result = await response.json();
    //     console.log("JSON parsed successfully.");
    //     compareData = result.compareData;
    //     console.log("Compare data:", compareData);

    // } catch (error) {
    //     console.error("There was an error:", error);
    // }

    const url = 'https://pricer.p.rapidapi.com/str?q=iphone';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4308455532mshf236c29a3b2c97ep171863jsn1bf99e393059',
            'X-RapidAPI-Host': 'pricer.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
         // Object to store titles and corresponding prices
         const items = {};

         // Populate items object with titles and prices
         result.forEach(item => {
             items[item.title] = item.price;
         });
 
         // Display each item with its corresponding price
         for (const title in items) {
            //  console.log(`${title}: ${items[title]}`);
            console.log(`Title: ${title} - Price: ${items[title]}`);
         }
        // compareData = result.compareData;
        // console.log("Compare data:", result.compareData);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

priceComparison();


