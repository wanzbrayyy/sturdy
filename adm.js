const mongoose = require('mongoose');
const connectDB = require('./config/database');
const User = require('./models/user');

const createAdmin = async () => {
    try {
        console.log('Menghubungkan ke database...');
        await connectDB();

        const adminUsername = 'wanz';
        const adminPassword = 'wanz'; // Ganti dengan password yang aman

        const userExists = await User.findOne({ username: adminUsername });

        if (userExists) {
            console.log(`User '${adminUsername}' sudah ada. Tidak ada tindakan yang diambil.`);
        } else {
            const newUser = new User({
                username: adminUsername,
                password: adminPassword 
            });

            await newUser.save();
            
            console.log('=======================================');
            console.log('✅ Akun admin berhasil dibuat!');
            console.log('---------------------------------------');
            console.log(`   Username: ${adminUsername}`);
            console.log(`   Password: ${adminPassword}`);
            console.log('=======================================');
        }

    } catch (error) {
        console.error('❌ Gagal membuat akun admin:', error.message);
    } finally {
        console.log('Menutup koneksi database...');
        await mongoose.connection.close();
    }
};

createAdmin();