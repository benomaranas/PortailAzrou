import mongoose from 'mongoose';

const testConnection = async () => {
    try {
        console.log('Testing MongoDB connection...');
        
        // Try different connection strings
        const uris = [
            'mongodb://localhost:27017/azrou_municipality',
            'mongodb://127.0.0.1:27017/azrou_municipality'
        ];
        
        for (const uri of uris) {
            try {
                console.log(`\nTesting: ${uri}`);
                
                const connection = await mongoose.connect(uri, {
                    serverSelectionTimeoutMS: 5000,
                    connectTimeoutMS: 5000,
                    socketTimeoutMS: 5000
                });
                
                console.log('✅ Connection successful!');
                console.log('Database name:', connection.connection.db.databaseName);
                
                // Test a simple operation
                const admin = connection.connection.db.admin();
                const result = await admin.ping();
                console.log('✅ Ping result:', result);
                
                await mongoose.disconnect();
                console.log('✅ Disconnected successfully');
                process.exit(0);
                
            } catch (error) {
                console.log('❌ Connection failed:', error.message);
                await mongoose.disconnect().catch(() => {});
            }
        }
        
        console.log('\n❌ All connection attempts failed');
        process.exit(1);
        
    } catch (error) {
        console.error('❌ Test failed:', error);
        process.exit(1);
    }
};

testConnection();
