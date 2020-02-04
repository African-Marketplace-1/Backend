# Backend
Web backend for African Marketplace 1


Endpoints:

Avrage pricing list:
|Method|endpoint|requires|description|
---|---|---|---
|GET| /api/prices/ | will have authorization header geven when logging in | gets list of prices by category|
|post| /api/prices/|product_cat, sub_category, product, avg_price | adds a category and price|
|delete| /api/prices/:id | no requierments | removes a category by id| 
Authorization: 
|Method|endpoint|requires|description|
---|---|---|---
