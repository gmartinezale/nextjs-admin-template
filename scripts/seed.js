const mongoose = require('mongoose');
const User = require('./models/user');

async function seedDB() {
  try {
    await mongoose.connect('mongodb+srv://quotes-user-db:HSvnZa3G3Vi7txcA@quotes-prod.j7vgvbg.mongodb.net/quotes-prod', { useNewUrlParser: true, useUnifiedTopology: true });

    const defaultUser = new User({
      // reemplaza estos valores con los datos del usuario por defecto
      fullMame: 'Alexis',
      email: 'gmartinez.alexis@gmail.com',
      password: 'devricas',
    });

    await defaultUser.save();

    console.log('Usuario por defecto creado con éxito.');

    await mongoose.connection.close();
  } catch (error) {
    console.error('Error al crear el usuario por defecto:', error);
  }
}

seedDB();