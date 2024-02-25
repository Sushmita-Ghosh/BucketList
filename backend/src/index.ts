import express from "express";
import cors from "cors";
import client from "./db";
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

// all categories
app.get("/api/v1/categories", async (req: any, res: any) => {
  try {
    // ensure the client is connected.
    await client
      .connect()
      .then(() => {
        console.log("Connected to PostgreSQL database!");
      })
      .catch((err) => {
        console.error("Error connecting to the database:", err);
      });

    // query the result
    const categories = await client.query("SELECT * FROM categories");

    res.status(200).json({
      status: "success",
      categories: categories["rows"],
    });
  } catch (error) {
    console.error(error);
  }
});

// single category
app.get("/api/v1/categories/:id", async (req: any, res: any) => {
  try {
    // ensure the client is connected.
    await client
      .connect()
      .then(() => {
        console.log("Connected to PostgreSQL database!");
      })
      .catch((err) => {
        console.error("Error connecting to the database:", err);
      });

    // query the result
    const category = await client.query(
      "SELECT * FROM categories WHERE category_id = $1",
      [req.params.id]
    );

    res.status(200).json({
      status: "success",
      category: category["rows"][0],
    });
  } catch (error) {
    console.error(error);
  }
});

// all plants
app.get("/api/v1/plants", async (req: any, res: any) => {
  try {
    // ensure the client is connected.
    await client
      .connect()
      .then(() => {
        console.log("Connected to PostgreSQL database!");
      })
      .catch((err) => {
        console.error("Error connecting to the database:", err);
      });

    // query the result
    const plants = await client.query("SELECT * FROM plants");

    res.status(200).json({
      status: "success",
      plants: plants["rows"][0],
    });
  } catch (error) {}
});

// single plant
app.get("/api/v1/plants/:id", async (req: any, res: any) => {
  try {
    // ensure the client is connected.
    await client
      .connect()
      .then(() => {
        console.log("Connected to PostgreSQL database!");
      })
      .catch((err) => {
        console.error("Error connecting to the database:", err);
      });

    // query the result
    const category = await client.query(
      "SELECT * FROM plants WHERE category_id = $1",
      [req.params.id]
    );

    res.status(200).json({
      status: "success",
      category: category["rows"][0],
    });
  } catch (error) {
    console.error(error);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
