# Backend
<h1>Web backend for African Marketplace 1</h1>

<h2>deployed api url:</h2>
<a>https://african-marketplace-2020.herokuapp.com/</a>

<h1>Authentication and authorization endpoints.</h1>
<h3>register:</h3>
<p>/api/auth/register</p>
<h3>expects an object like:</h3> 
<p>" {
	"username": "Testing",
	"password": "testpass",
	"profile_pic_url": ""
} "</p>
<br>
<h3>login:</h3>
<p>/api/auth/login</p>
<h3>expects an object like</h3> 
<p>" {
	"username": "Testing",
	"password": "testpass"
} "</p>
<br>
<br>
<h1>Average pricelist endpoints.</h1>
<h3>Get average price list:</h3>
<p>/api/prices</p>
<h3>Post to average price list:</h3>
<p>/api/prices</p>
<h3>expects an object like</h3>
<p> " {
	"product_cat": "Other",
	"sub_category": "Alcohol",
	"product": "Corn vodka 150 proof",
	"avg_price": 35
} "</p>
<h3>Delete from average price list:</h3>
<p>/api/prices/:id</p>
<br>
<br>
<h1>Listing endpoints.<h1>
<h3>GET all listings:</h3>
<p>/api/listings</p>
<h3>Get Listing by id</h3>
<p>/api/listings/:id</p>
<br>
<h1>Listing endpoints that include user information</h1>
<h3>Get listings posted by a specific user:</h3>
<p>/api/users/:id/listings</p>
<h3>Post a new listing:</h3>
<p>/api/users/:id/listings</p>
<h3>Expects an object like</h3>
<p>" {
	"location": "Davenport",
        "item": "brussels sprouts",
        "description": "whole stalks of sprouts",
        "price": 10
} "</p>

<h3>Update Listing:</h3>
<p>/api/users/:id/listings/:id</p>
<h3>Expects an object like</h3>
<p>" {
	"user_id": "2",
	"location": "yo mamas house",
        "item": "this egplant emoji",
        "description": "wait what...",
        "price": 42069
} "</p>

<h3>Delete Listing</h3>
<p>/api/users/:id/listings/:id</p>