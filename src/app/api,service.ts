import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
     
     
    
    constructor(private http: HttpClient) { }

    getUsers() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        return this.http.get(apiUrl);
    }

    getProducts(){
        const Url='https://dummyjson.com/products';
        return this.http.get(Url)
    }

    apiUrl = 'https://jsonplaceholder.typicode.com/users';

     registerUser(data: any) {

     return this.http.post(this.apiUrl, data);
    }
   
          

}

