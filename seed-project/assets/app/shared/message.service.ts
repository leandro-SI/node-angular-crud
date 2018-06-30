import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from '../message';

@Injectable()
export class MessageService{
    private message:Message;
    private baseUri:string="http://localhost:8080";
    private headers = new HttpHeaders().set('Content-Type','application/json');
    constructor(private http:HttpClient) {}

    createMessage(message:Message){
        return this.http.post(this.baseUri+'/create',message,{headers:this.headers});
    }

    readMessages(){
        return this.http.get(this.baseUri+'/read',{headers:this.headers});
    }

    updateMessage(message:Message){
        return this.http.put(this.baseUri+'/update',message,{headers:this.headers});
    }

    deleteMessage(id:string){
        return this.http.delete(this.baseUri+'/delete/'+id,{headers:this.headers});
    }

    setter(message:Message){
        this.message=message;
    }

    getter(){
        return this.message;
    }
}