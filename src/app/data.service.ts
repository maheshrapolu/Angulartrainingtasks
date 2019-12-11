import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private ht: HttpClient) { }
  get() {
    return this.ht.get(' http://localhost:3000/posts');
  }
  post(d) {
    return this.ht.post(' http://localhost:3000/posts', d);
  }

  ge() {
    return this.ht.get('http://localhost:3000/posts');
  }
  po(d) {
    return this.ht.post('http://localhost:3000/posts', d);
  }
  de(d) {
    return this.ht.delete('http://localhost:3000/posts/' + d);
  }
  up(d) {
    return this.ht.put('http://localhost:3000/posts/' + d.id, d);
  }
  pot(x){
    return this.ht.post('http://192.168.1.155:8089/login', x);
  }
}
