import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../../shared/message.service';
import { Message } from '../../message';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'

})

export class NavbarComponent implements OnInit {
    
   

    constructor(private router:Router, private messageService:MessageService){}

    ngOnInit(){
     
    }

    newMessage(event:any){
        event.preventDefault();
        this.messageService.setter(new Message());
        this.router.navigate(['/createUpdate']);
        
    }

   
    
    }





