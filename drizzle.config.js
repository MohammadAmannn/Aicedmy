/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.jsx",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:D1TkPy6igrVO@ep-mute-term-a5fb4kjo.us-east-2.aws.neon.tech/neondb?sslmode=require',
    }
}
