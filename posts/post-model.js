const db = require('../data/db-config');

function find(user_id) {
  return db("posts as p")
      // INNER jOIN users AS u ON u.id = p.user_id
      // TableName, First_Conditional, Second_Conditional
          .join("users as u", "u.id", "p.user_id")
          .where({ user_id })
      // SELECT p.id, p.contents, u.username
      // This prevents the same ID from repeating itself
          .select("p.id", "p.contents", "u.username")

}

module.exports = {
  find,
}