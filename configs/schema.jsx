import { integer, json, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const CourseList = pgTable("courseList", {
  id: serial("id").primaryKey(),
  courseId: varchar("courseId").notNull(),
  name: varchar("name").notNull(),
  category: varchar("category").notNull(),
  level: varchar("level").notNull(),
  includeVideo: varchar("includevideo").notNull().default("Yes"),
  courseOutput: json("courseOutput").notNull(),
  createdBy: varchar("createdBy").notNull(),
  userName: varchar("username"),
  userProfileImage: varchar(" userProfileImage"),
});

export const Chapters=pgTable('chapters',{
  id:serial('id').primaryKey(),
  courseId:varchar('courseId').notNull(),
  chapterId:integer('chapterId').notNull(),
  content:json('content').notNull(),
  videoId:varchar('videoId').notNull(),
  thumbnail: varchar("thumbnail") // Add this line


})
