const axios = require("axios").default;

const webhook = "Webhook Url";

const data = {
    "content": "this is a test message, change to whatever you wanna send over the webhook."// change to message thats being sent over the webhook
};

axios.post(webhook, data).then(res=> {
    console.log(res);
}).catch(err => {
    console.log(err);
});
