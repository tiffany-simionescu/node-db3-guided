const server = require("./server.js");

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
    console.log(`\n** API running on port: ${PORT} **\n`);
});


// --- NOTES --- //

// SQL
// SELECT * FROM users
// ORDER BY Id DESC  // higher to lower
// LIMIT 3;

// Knex
// db("users")
//    .orderBy("Id")
//    .limit(3);

// JOINS!!
// SQL
// SELECT * FROM OrderDetail
// JOIN Product ON OrderDetail.ProductId = Product.id
// LIMIT 1;

// SQL
// SELECT OrderDetail.id, Product.id FROM OrderDetail
// JOIN Product ON OrderDetail.ProductId = Product.id
// LIMIT 1;

// Alias
// SELECT o.id, p.id
// FROM OrderDetail AS o
// JOIN Product AS p
// ON o.ProductId = p.id
// LIMIT 1;


// SELECT e.FirstName, e.LastName FROM "Order" AS o
// JOIN "Employee" AS e ON o.EmployeeId = e.id
// WHERE o.Id = 16608;

// SELECT o.Id, e.FirstName, e.LastName, c.ContactName FROM "Order" AS o
// INNER JOIN "Employee" AS e ON o.EmployeeId = e.id // don't need INNER - it's default
// JOIN "Customer" AS c ON o.CustomerId = c.id
// WHERE o.Id = 16608;

// Inner join is what is used by default
// Left / right Join - return everything if Left / Right is there allow the opposite side to be null
// Full Join - return all regardless if both sides are there

// SELECT o.Id, o.OrderDate, e.FirstName, e.LastName, c.ContactName FROM "Order" AS o
// LEFT JOIN "Employee" AS e ON o.EmployeeId = e.id
// JOIN "Customer" AS c ON o.CustomerId = c.id
// WHERE o.Id = 16608;

// FROM is left side - Order
// JOIN is right side - Employee, Customer

// SELECT SUM(Quantity) AS Total FROM OrderDetail;
// Total is a temporary column in this case

// SELECT SUM(Quantity) AS Total FROM OrderDetail
// GROUP BY ProductId;

// SELECT COUNT(p.Id) AS Total, c.CategoryName FROM Product AS p
// JOIN Category AS c ON c.id = p.CategoryId
// GROUP BY CategoryId;

