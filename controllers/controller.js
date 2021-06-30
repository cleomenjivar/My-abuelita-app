// CODE TO ADD RECIPE TO DATABASE
// CODE TO FETCH RECIPES

const sqlite3 = require('sqlite3').verbose();

// BACKEND FILE FOR MY DATABASES QUERIES

const addRecipetoDB = (recipe) => {
    console.log("Check the recipes received", recipe)

    let db = sqlite3.Database("db/internationalrecipes.db"); {
        db.run(`ÌNSERT INTO internationalrecipes (Title, Country, City, Ingredients, Process) VALUES (?,?,?,?,?)`,[recipe.title, recipe.country, recipe.city, recipe.list, recipe.process], function (err) {

            if (err) {
              return console.log(err);
            }
            // get the last insert id
            console.log(`A row has been inserted with rowid ${this.lastID}
            `);
        });
        db.close();
}
};



// EXPORTS

// exports.addRecipetoDB = addRecipetoDB
