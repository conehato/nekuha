export { apiHandler };

type methodType = "GET" | "POST" | "PUT" | "DELETE";


function apiHandler<Res, Req = unknown>(method: methodType) {

    return async (url: string, body?: any) => {
      const requestOptions: any = {
        method,
      };

      requestOptions.headers = { "Content-Type": "application/json" };
      requestOptions.body = JSON.stringify(body);

      const response = await fetch(url, requestOptions);
      return response as Res;
    };

     
      
    
  }
