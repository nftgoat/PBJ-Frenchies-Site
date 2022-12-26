// const printfulUrl = https://api.printful.com/

// const key = Rz0olXJhCf5sK94irbZ22HDKWbTnlG9fCPYhBsII


// async function getProduct() {
//     const response = await fetch(printfulUrl);
//     const data = await response.json();
//     console.log (response)
// }
const options 
curl --location --request GET 'https://api.printful.com/store/products' \
--header 'Authorization: Basic {encoded_api_key}'
{
    "sync_product": {
    "external_id": "4235234213",
    "name": "T-shirt",
    "thumbnail": "*http://your-domain.com/path/to/thumbnail.png",
    "is_ignored": true
    },
    "sync_variants": [
    {}
    ]
    }