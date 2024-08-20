import db from "./db.js";

async function getEmployees() {
  (await db).query("SELECT * FROM employees", (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(res.rows);
  });
}

getEmployees();
