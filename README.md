# Backend
<h1>Web backend for African Marketplace 1</h1>

<h2>deployed api url:</h2>
<a>https://african-marketplace-2020.herokuapp.com/</a>


<h3>register:</h3>
<p>/api/register</p>
<h3>expects an object like:</h3> 
<p>"{
	"username": "Testing",
	"password": "testpass",
	"profile_pic_url": ""
}"</p>

<h3>login:</h3>
<p>/api/login</p>
<h3>expects an object like</h3> 
<p>"{
	"username": "Testing",
	"password": "testpass"
}"</p>
<h3>Get average price list:</h3>
<p>/api/prices</p>
<h3>Post to average price list:</h3>
<p>/api/prices</p>
<h3>expects an object like</h3>
<p> "{
	"product_cat": "Other",
	"sub_category": "Alcohol",
	"product": "Corn vodka 150 proof",
	"avg_price": 35
}"</p>
<h3>Delete from average price list:</h3>
<p>/api/prices/:id</p>


