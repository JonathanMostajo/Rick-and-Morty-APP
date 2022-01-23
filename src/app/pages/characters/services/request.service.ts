import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseURL = 'https://rickandmortyapi.com/api/'
const characterURL = baseURL + 'character'

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  
  constructor(private httpClient: HttpClient) { }
  
  public getCharacters():Observable<any>{
    return this.httpClient.get(characterURL)
  }
  public getCharacter(idCharacter: any):Observable<any>{
    return this.httpClient.get(`${characterURL}/${idCharacter}`)
  }
}
