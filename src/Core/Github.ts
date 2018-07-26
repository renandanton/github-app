import * as request from 'request';

export default class Github {
  
  constructor () {}
  
    public static async request(uri: string ,query: any) {
      let route = uri == '' ? '' : uri;
      let params =  await Github.mergeUri(query, {client_id: process.env.CLIENT_ID, client_secret: process.env.CLIENT_SECRET});
      return  await new Promise((resolve, reject) => {
        request({
                uri: 'https://api.github.com/users'+ String(route),
                qs: params,
                headers: { 'user-agent': 'nodejs' },
                method: 'GET'
                }, function (err, res, body) {
                    if (!err && res.statusCode == 200) {
                        let data = JSON.parse(body);
                        resolve(data);
                    } else {
                        reject(body);
                    }
                });
      });
    }
    
    public static mergeUri(obj: any, src: any) {
      for (var key in src) {
          if (src.hasOwnProperty(key)) obj[key] = src[key];
      }
      return obj;
    }
}