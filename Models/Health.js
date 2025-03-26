const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();

class Health {
  static client = null;
  static db = null;

  // Initialize connection I could not use the class constructor because of the async required for smooth
  static async connect(database = "cse341-news") {
    if (!this.client) {
      try {
        this.client = await MongoClient.connect(process.env.Server_URI);
        this.db = this.client.db(database);
        console.log("Connected to MongoDB");
      } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error;
      }
    }
    return this.db;
  }

  // Get Healths collection
  static async collection(collection = "health") {
    // Ensure connection exists
    await this.connect();
    return this.db.collection(collection);
  }

  // GET ALL Healths
  static async findAll() {
    const collection = await this.collection();
    return collection.find().toArray();
  }

  // GET ONE Health by ID
  static async findById(id) {
    const collection = await this.collection();
    return collection.findOne({ _id: new ObjectId(id) });
  }

  // CREATE a single Health
  static async create(data) {
    const collection = await this.collection();
    const result = await collection.insertOne(data);
    return result.insertedId;
  }

  // CREATE Multiple Healths
  static async createMany(HealthsArray) {
    const collection = await this.collection();
    const result = await collection.insertMany(HealthsArray);
    return result;
  }

  // UPDATE a Health
  static async update(id, updateData) {
    const collection = await this.collection();
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    );
    return result.modifiedCount;
  }

  // DELETE a Health
  static async delete(id) {
    const collection = await this.collection();
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount;
  }

  // Close connection
  static async close() {
    if (this.client) {
      await this.client.close();
      console.log("MongoDB connection closed");
    }
  }
}

module.exports = Health;
