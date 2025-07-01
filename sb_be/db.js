const mongoose = require('mongoose');
const db_username = 'master8055';
const db_password = 'whiteboarduser'; // No need to encode if no special chars, but encoding is safe
const encodedPassword = encodeURIComponent(db_password);

// ✅ Use mongodb+srv and provide a database name (e.g., "whiteboard")
const connectionString = `mongodb+srv://${db_username}:${encodedPassword}@cluster0.o0awrrb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const connectToDatabase = async () => {
    try {
        await mongoose.connect(connectionString, connectionParams);
        console.log('✅ MongoDB connection successful');
    } catch (error) {
        console.error('❌ MongoDB connection error:', error);
    }
};

module.exports = connectToDatabase;
