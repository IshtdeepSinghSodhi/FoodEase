const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://parassodhi01:paras@cluster0.yiuc97q.mongodb.net/goFoodmern?retryWrites=true&w=majority';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log('Connected to MongoDB');

        const fetched_data = await mongoose.connection.db.collection("food_items").find().toArray();
        // console.log('Data:', fetched_data);

        const catData = await mongoose.connection.db.collection("foodCategory").find().toArray();
        global.food_items = fetched_data;
        global.foodCategory = catData;
        // console.log(global.foodCategory)


    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = mongoDB;
