import { Component } from '@angular/core';
import { PagesService }from '../pages.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	frm = {};
	users: any = [];
	
	constructor(private _pagesService: PagesService) {
		console.log(this._pagesService)
		this._pagesService.getPages();
		console.log(this.users)	
	};



	addUser = () => {
		if(this.frm['id']) {
			for (var i = this.users.length - 1; i >= 0; i--) {
				if(this.users[i].id == this.frm['id']) {
					this.users[i] = this.frm;
				}
			}
			console.log(this.users)
		} else {
			let date = new Date();
			this.frm['id'] = date.getTime();	
			this.users.push(this.frm);
			console.log(this.users)
		}
		this.frm = {};
	};


	editUser = (user) => {
		this.frm = Object.assign({}, user);;
	}

	deleteUser = (user) => {
		this.users.splice(this.users.indexOf(user), 1)
	}
}
