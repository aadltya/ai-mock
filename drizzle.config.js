/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:TDXFg4wpKe2q@ep-long-lake-a5mjag2u.us-east-2.aws.neon.tech/neondb?sslmode=require',
    }
  };