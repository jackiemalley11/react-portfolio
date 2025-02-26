import { MongoClient } from "mongodb";
// import { NextRequest, NextResponse } from 'next/server';
// import sanitizeHtml from 'sanitize-html';
import { Project, Experience } from "@/tools/data.model";

// MongoDB constants
const MONGO_URL: string = process.env.MONGO_URL || "mongo://mongo:27017";
const MONGO_DB_NAME: string = "dbProjects";
const MONGO_COLLECTION_TECHS: string = "projects";
const MONGO_COLLECTION_EXPERIENCE: string = "experience"; 


export async function getProjects() {
    // construct a MongoClient object
    let mongoClient: MongoClient = new MongoClient(MONGO_URL);

    let projectArray: Project[] = [];

    try {
        await mongoClient.connect();
        // get JSON data from mongoDB server (ASYNC task)
        projectArray = await mongoClient.db(MONGO_DB_NAME).collection<Project>(MONGO_COLLECTION_TECHS).find().toArray();
        // need to convert ObjectId objects to strings
        projectArray.forEach((proj: Project) => proj._id = proj._id.toString());

    } catch (error: any) {
        console.log(`>>> ERROR : ${error.message}`);
        throw error;
    } finally {
        mongoClient.close();
    }

    return { projects: projectArray};
}

// Method for fetching experience data
export async function getExperience() {
    // construct a MongoClient object
    let mongoClient: MongoClient = new MongoClient(MONGO_URL);
  
    let experienceArray: Experience[];
  
    try {
      await mongoClient.connect();
      // get JSON data from mongoDB server (ASYNC task)
      experienceArray = await mongoClient.db(MONGO_DB_NAME).collection<Experience>(MONGO_COLLECTION_EXPERIENCE).find().toArray();
      // need to convert ObjectId objects to strings
      experienceArray.forEach((exp: Experience) => exp._id = exp._id.toString());
    } catch (error: any) {
      console.log(`>>> ERROR : ${error.message}`);
      throw error;
    } finally {
      mongoClient.close();
    }
  
    return { experience: experienceArray };
  }