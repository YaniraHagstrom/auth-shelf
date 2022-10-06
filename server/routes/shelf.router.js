const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  const sqlQuery = `
    SELECT * FROM item;
  `
  pool.query(sqlQuery)
      .then(dbRes => {
        res.send(dbRes.rows);
      })
      .catch(error => {
        res.sendStatus(500);
        console.log('Error in GET ./routes/shelf.router', error);
      })
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  // endpoint functionality
  const id = req.user.id
  console.log('userid is:', id);
  console.log('in router.post. Here is req.body:', req.body);
  const newItem = req.body;
  const queryText = `INSERT INTO item ("description", "image_url", "user_id")
	                   VALUES ($1, $2, $3);`;
  const queryValues = [
    newItem.description,
    newItem.image_url,
    id
  ]
  pool.query(queryText, queryValues)
    .then(() => {res.sendStatus(201); })
    .catch((err) => {
      console.log('error in post route:', err);
      res.sendStatus(500);
    })
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // endpoint functionality
  console.log(`Deleting Item with ID ${req.params.id}`);
    
    const sqlText = `
        DELETE from "item"
        WHERE "id"=$1;
        `
    let sqlVal = [req.params.id];
    
    pool.query(sqlText, sqlVal)

    .then( delRes => {
        console.log('DELETE Route Successful', delRes);
        res.sendStatus(200);
    })
    .catch( delErr => {
        console.log('DELETE Route Unsuccessful', delErr);
        res.sendStatus(500);
    });
}); // END OF router.delete

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
