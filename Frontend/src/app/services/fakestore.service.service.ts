import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakestoreServiceService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products');
  }

  getProductsByCategory(category: string): Observable<any> {
    const linkApi = `https://fakestoreapi.com/products/category/${category}`;
    return this.http.get(linkApi);
  }
}


// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class FakestoreServiceService {
//   getAllProducts() {
//     throw new Error('Method not implemented.');
//   }
//   getProductsByCategory(category: string) {
//     throw new Error('Method not implemented.');
//   }

//   constructor(private http: HttpClient) { }
//   linkApi: string = "https://fakestoreapi.com/products/category/electronics";

//   getElectronicsProducts(){
//     return this.http.get(this.linkApi);
//   }

//   getCategory(){
//     // Este método pode ser implementado para obter outras categorias, se necessário
//   }
// }

