var products = [
    {
        name: "Pizza",
        description: "Delicious pizza, what more could you want?",
        cost: 10
    },
    {
        name: "Watch",
        description: "Keeps track of time... it's a watch",
        cost: 20
    },
    {
        name: "Car",
        description: "Completely generic car, it's gray",
        cost: 500
    }
];

function printItemDetails(item)
{
    console.log('$' + item.cost + ' - ' + item.name + ' - ' + item.description);
}

for (var i = 0; i < products.length; i++) {
    printItemDetails(products[i]);
}
