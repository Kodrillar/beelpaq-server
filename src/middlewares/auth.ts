import { Request, Response } from "express";
import firebase_admin from "../services/firebase-admin";

interface RequestObjectIndexSignature {
    [objectKey:string]:Object;
}

export default async function(req:Request | RequestObjectIndexSignature, res:Response, next:Function){

    let token:string;
    /** 
     * Destructuring array and skipping the first value which is the auth scheme (BASIC, BEARER).
     * More on authentication scheme: https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication
     */
    [ , token] =  (req as Request).headers.authorization?.split(' ') ?? '';

    if(!token) return res.status(403).json({message:'Access denied! Authentication required.'})
    try{
        const verifiedToken = await firebase_admin.auth().verifyIdToken(token, true); 
        (req as RequestObjectIndexSignature).user = verifiedToken;
        next();
    }catch (err){
        console.log(err); //TODO: log error to log file
        res.status(400).json({message:'Invalid token!'})
    }
}

export {
    RequestObjectIndexSignature
}