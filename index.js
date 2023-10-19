const express = require('express');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3000;

//if not cannot do body parser
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//database:
const knex= require('knex');
const db = knex({
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'elodie',
      password: '123456789',
      database: 'Carbon_FF',
    },
  });

//create a user
app.post('/api/create', async (req, res) => {
  try {
    // Extract data from request body
    const { first_name, last_name, id_country } = req.body;

    // Insert a new record into the database
    const [newRecord] = await db('users').insert({
      first_name,
      last_name,
      id_country
    }).returning('id','first_name','last_name','id_country');
    
    res.json({ success: true, newRecord });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Error creating record.' });
  }
});
//compute the carbon foot print of a given country (works)
app.post('/api/carbonfootprint', async (req, res) => {
  try {
    const {
      id_country,
      transport_emission,
      diet_emission,
      electricity_emission,
      waste_emission
    } = req.body;

    
    const trpData= await db('country').select('transport_emission').where('id_country',id_country);
    //to only get the value
    const trp = parseFloat(trpData[0].transport_emission);

    const dietData = await db('country').select('diet_emission').where('id_country', id_country);
      const diet = parseFloat(dietData[0].diet_emission);

      const elecData = await db('country').select('electricity_emission').where('id_country', id_country);
      const elec = parseFloat(elecData[0].electricity_emission);

      const wasteData = await db('country').select('waste_emission').where('id_country', id_country);
      const waste = parseFloat(wasteData[0].waste_emission);

  

    
    let total_trp = trp * transport_emission * 365;
    let total_diet = diet * diet_emission * 365;
    let total_elec = elec * electricity_emission * 365;
    let total_waste = waste * waste_emission * 365;

    

    let total = (total_trp + total_diet + total_elec + total_waste) / 1000;
    console.log(total);
    
    
      
    res.json({total});
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Error processing data.' });
  }
});