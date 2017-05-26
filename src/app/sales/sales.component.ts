import {Component,OnInit,Input} from '@angular/core';
import {Router} from '@angular/router';
import {AppserviceService} from '../appservice.service';
import { Observable } from 'rxjs';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
declare var $: any;

@Component({
	selector: 'sales-wiz',
	templateUrl: 'sales.component.html',
	styleUrls:['sales.component.css']
})

export class SalesComponent implements OnInit{

	sst:any;;
	obe: Observable<any>;
	dd:any;

	user: Observable<firebase.User>;
  	items: FirebaseListObservable<any[]>;
	msgVal:any;

	constructor(private router:Router,private ssv: AppserviceService,db: AngularFireDatabase,public af:AngularFireAuth){
		this.items = db.list('/messages',{
			query: {
			limitToLast: 50
			}
		});
	}


	ngOnInit(){
		
		//setInterval(()=>{
			this.obe = this.ssv.getEnquiries();		
		//},3000)
		this.obe.subscribe(result => {
			this.dd = result;
		})
	
	}
	
	triggerFn(e){
		let fn = e;
		if(this[fn]) {
        	this[fn]();
    	}
	}

	addfn(){
		this.sst="show";
		console.log("Add enquiry")
	}

	addqfn(){
		this.sst=''
		var rid = $("tr.highlight td:first").html();
		console.log("Add products" + rid)
	}


	selmode(event,dd){
		$('#mytable').on('click', 'tbody tr', function(event) {
			$(this).addClass('highlight').siblings().removeClass('highlight');	
		});		
	}

	Send(msg:string){
    	this.items.push({message:msg});
    	this.msgVal='';
  	}
	
	logout() {
  		this.af.auth.signOut();
	}
}
