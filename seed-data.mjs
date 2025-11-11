import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const connection = await mysql.createConnection(process.env.DATABASE_URL);
const db = drizzle(connection);

async function seed() {
  console.log("Seeding database...");

  // Insert categories
  await db.execute(`
    INSERT INTO categories (name, description, displayOrder, isActive) VALUES
    ('WeWork Day Pass', '單日通行證，可在 WeWork 任一據點使用一天', 1, 1),
    ('WeWork 禮品卡', 'WeWork 官方禮品卡', 2, 1),
    ('其他品牌禮品卡', '各大品牌禮品卡', 3, 1)
    ON DUPLICATE KEY UPDATE name=name
  `);

  // Insert brands
  await db.execute(`
    INSERT INTO brands (name, description, isActive) VALUES
    ('WeWork', '全球領先的共享辦公空間品牌', 1),
    ('星巴克', '全球知名咖啡連鎖品牌', 1),
    ('誠品書店', '台灣知名書店品牌', 1)
    ON DUPLICATE KEY UPDATE name=name
  `);

  console.log("Database seeded successfully!");
  await connection.end();
}

seed().catch(console.error);
