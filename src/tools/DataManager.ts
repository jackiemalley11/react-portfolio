import { MongoClient } from "mongodb";
// import { NextRequest, NextResponse } from 'next/server';
// import sanitizeHtml from 'sanitize-html';
import { Projects } from "@/tools/data.model";

// MongoDB constants
const MONGO_URL: string = process.env.MONGO_URL!;
const MONGO_DB_NAME: string = "dbProjects";
const MONGO_COLLECTION_TECHS: string = "projects";

export async function getProjects() {
    // construct a MongoClient object
    let mongoClient: MongoClient = new MongoClient(MONGO_URL);

    let projectArray: Projects[];

    try {
        await mongoClient.connect();
        // get JSON data from mongoDB server (ASYNC task)
        projectArray = await mongoClient.db(MONGO_DB_NAME).collection<Projects>(MONGO_COLLECTION_TECHS).find().toArray();
        // need to convert ObjectId objects to strings
        projectArray.forEach((proj: Projects) => proj._id = proj._id.toString());

    } catch (error: any) {
        console.log(`>>> ERROR : ${error.message}`);
        throw error;
    } finally {
        mongoClient.close();
    }

    return { projects: projectArray};
}