import { Component, OnInit } from '@angular/core';
import { MessageService } from '../shared/message.service';
import { Message } from '../message';
import { Router } from '@angular/router';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html'
})

export class ListComponent implements OnInit{

    private messages:Message[];
    constructor(private _messageService:MessageService, private router:Router){}

    ngOnInit(){
        this.readMessages();
    }

    readMessages(){
        this._messageService.readMessages().subscribe(
            data=>{
                console.log(data);
                this.messages=data['msg'];
            },
            error=>{
                console.log(error);
            }
        )
    }

    doUpdate(message){
        this._messageService.setter(message);
        this.router.navigate(['createUpdate']);
    }

    doDelete(message){
        this._messageService.deleteMessage(message._id).subscribe(
            data=>{
                this.messages.splice(this.messages.indexOf(message),1);
            },
            error=>{
                console.log(error);
            }
        )
    }
}