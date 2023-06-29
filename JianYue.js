/*************************************

**************************************

[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/(.*?)*$) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/ttqjt.js

[mitm]
hostname = api.revenuecat.com

*************************************/


const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];
const supportedAgents = ['totowallet', 'widget_art', 'apollo', 'Aphrodite'];
const responseBody = {};

if (supportedAgents.some(agent => ua.includes(agent))) {
  responseBody.purchase_date = "2022-09-09T09:09:09Z";
  responseBody.expires_date = "2099-09-09T09:09:09Z";
  responseBody.original_purchase_date = "2022-09-09T09:09:09Z";
  responseBody.ownership_type = "PURCHASED";
}

$done({ body: JSON.stringify(responseBody) });
