import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../shared/message.service';
import { Message } from '../message';

@Component({
    selector: 'app-create-update',
    templateUrl: './create-update.component.html'
})

export class CreateUpdateComponent implements OnInit{

    private message:Message;
    constructor(private messageService:MessageService, private router:Router){}

    ngOnInit(){
        this.message= this.messageService.getter();
    }

    createOrUpdate(){
        if(this.message._id==undefined){
        this.messageService.createMessage(this.message).subscribe(
            data=>{
                console.log(data);
                this.router.navigate(['/'])
            },
            error=>{
                console.log(error);
            }
        )
    }else{
        this.messageService.updateMessage(this.message).subscribe(
            data=>{
                console.log(data);
                this.router.navigate(['/'])
            },
            error=>{
                console.log(error);
            }
        )
    }

    }
}