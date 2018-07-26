
import { Request, Response, NextFunction} from 'express';

export class Cors {

  /**
   * Initialize the HeroRouter
   */
  constructor() {}
  
  /**
   * Enable cors origin.
   */
  public static init(req: Request, res: Response, next: NextFunction) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
  }
}

// Create the ClientRouter, and export its configured Express.Router
// const clientRoutes = new Cors();
// clientRoutes.init();

export default Cors;