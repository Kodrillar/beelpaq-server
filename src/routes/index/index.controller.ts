import { Request, Response } from "express";


export default function indexMessageController  (req:Request, res:Response){
    res.json({message:"Welcome to Beelpaq API V1"})
}