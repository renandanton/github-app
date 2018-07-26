import { Request, Response, NextFunction } from 'express';
import Github from '../Core/Github';

export default class UsersController {
    
    constructor () {}
    
    public static async since(req: Request, res: Response, next: NextFunction) {
        let since = req.params.since;
        
        let data = await Github.request('', {since: since});
        
        res.status(200).json({"payload": data});
    }

    public static async details(req: Request, res: Response, next: NextFunction) {
        let username = req.params.username;
        
        let data = await Github.request(`/${username}`, {});

        return res.status(200).json({"payload": data});
    }
    
    public static async repos(req: Request, res: Response, next: NextFunction) {
        let username = req.params.username;

        let data = await Github.request(`/${username}/repos`, {});

        return res.status(200).json({"payload": data});
    }
}