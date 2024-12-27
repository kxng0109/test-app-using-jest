require("dotenv").config();
const { connect, connection } = require("mongoose");
const request = require("supertest");
const app = require("../app");

beforeEach(async () => {
	await connect(process.env.MONGODB_URI);
});

afterEach(async () => {
	await connection.close();
});

describe("GET /api/products", () => {
	it("should return all products", async () => {
		const res = await request(app).get("/api/products");
		expect(res.statusCode).toBe(200);
		expect(res.body.length).toBeGreaterThan(0);
	});
});

describe("POST /api/products", () => {
	it("should create a product", async () => {
		const response = await request(app)
			.post("/api/products")
			.send({
				name: "Sunday morning",
				price: 0,
				description: "I got that sunday morning feeling",
			});
		expect(response.statusCode).toBe(201);
		expect(response.body.name).toBe("Sunday morning");
	});
});

describe("PATCH /api/products/:id", () => {
	it("should update a product", async () => {
		const res = await request(app).patch("/api/products/product_ID").send({
			name: "Sunday morning",
			price: 0,
			description: "I got that sunday morning feeling",
		});
		expect(res.statusCode).toBe(200);
		expect(res.body.price).toBe(0);
	});
});

describe("DELETE /api/products/:id", () => {
	it("should delete a product", async () => {
		const res = await request(app).delete("/api/products/product_ID");
		expect(res.statusCode).toBe(200);
	});
});
