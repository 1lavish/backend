import dotenv from 'dotenv'
dotenv.config({ path: '/Users/macm2/Library/Mobile Documents/com~apple~CloudDocs/Projects/Project_1/Backend/.env' })  // ✅ load .env from root

import mongoose from 'mongoose'
import { DB_NAME } from './constants.js'
import connectDB from './db/index.js'
import express from 'express'


/*
;(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log("MongoDB connected")
    app.on('error', (err) => {      console.error("Server error:", err)
        throw err
    })
  } catch (error) {
    console.error("Error connecting to MongoDB:", error)
    throw error
  }
})()*/