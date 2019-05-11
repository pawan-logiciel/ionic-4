import { Injectable } from '@angular/core';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor() { }

  	getPages = () => {
		axios.get('http://127.0.0.1:8000/api')
		  .then(function (response) {
		    console.log(response);
		  	return response.data;
		  })
		  .catch(function (error) {
		    console.log(error);
		    return error;
		  });
	};
}
