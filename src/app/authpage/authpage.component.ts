import {Component,OnInit,Input} from '@angular/core';
import {Router} from '@angular/router';
import {AppserviceService} from '../appservice.service';
import { Observable } from 'rxjs';
import {flyInBottomFast,bounceInBottom,fadeIn} from '../router.animations';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
declare var $: any;

@Component({
	selector: 'sales-wiz',
	templateUrl: 'authpage.component.html',
	styleUrls:['authpage.component.css'],
	animations: [flyInBottomFast(),bounceInBottom(),fadeIn()]
})

export class AuthPageComponent implements OnInit{
	userdetails = {unm: '',pwd: '',snm:'',fnm: ''};
	sst:any;;
	obe: Observable<any>;
	dd:any;
	cloudState:any='in';
	formState:any='in';
	buttonState:any='in';
	imageState:any='in';
	msgVal:any;
	showtbl:any="";
	showmsgform:any="";
	showregform:any="";

  	items: FirebaseListObservable<any[]>;
	users: FirebaseListObservable<any[]>;
	

	constructor(private router:Router,private ssv: AppserviceService,db: AngularFireDatabase,public af:AngularFireAuth){
		this.items = db.list('/messages',{
			query: {
			limitToLast: 50
			}
		});

		this.users = db.list('/users',{
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
	
	displaytble(value){
		this.showtbl = value;
	}
	displaymsgs(value){
		this.showmsgform = value;
	}
	displayusers(value){
		this.showregform = value;
	}
	clear(){
		this.showregform = '';
		this.showmsgform = '';
		this.showtbl = '';
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
	
	saveusers(f){
		this.users.push(f);
	}

	logout() {
  		this.af.auth.signOut();
	}
}
