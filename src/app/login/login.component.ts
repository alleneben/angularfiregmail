import { Component,HostBinding, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import {flyInBottomFast,bounceInBottom,fadeIn} from '../router.animations';
import * as firebase from 'firebase/app';
import {AppserviceService} from '../appservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [flyInBottomFast(),bounceInBottom(),fadeIn()]
})
export class LoginComponent implements OnInit {
  error:any;
  user = {unm: '',pwd: '',eml:'',tel: '',com:''};
  cloudState:any='in';
	formState:any='in';
	buttonState:any='in';
	imageState:any='in';

  constructor(public af: AngularFireAuth, private router:Router,private lsv: AppserviceService) { 
  
  }

  ngOnInit() {
  
  }

  onFormSubmit(f){
		this.lsv.onLogin(f).subscribe(
			dd => {
				var out = dd;
				if(out.success){
					switch (out.sd.LST) {
						case '0':
							console.log('case 0');
							break;
						case '1':
							this.router.navigate(['authpage']);
						default:
							if(out.st && out.sm){
								console.log('something else came up');
							}
					}
				} else if(out.failure) {
					this.error = out.em;
				}		
    		},
			error => console.log(error)
		);
	}

  loginGoogle() {
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then (
      (success) => {
        this.router.navigate(['authpage']);
      }
    )
    .catch (
      (err)=>{
        this.error = err;
      }
    );
  }

}
