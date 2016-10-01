import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class BooksService {

  // Improvement: inject this with OpaqueToken
  private baseurl: string = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';

  constructor(private http: Http) { }

  getBooks(title: string) {

    let url = this.baseurl + title;

    return this.http.get(url)
      .toPromise()
      .then(this.extractTitles) 
      .catch(this.handleError);
  }

  private extractTitles(response: Response) {
    return response.json().items.map(book => book.volumeInfo.title);
  }

  private handleError(error: any)  {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }

}