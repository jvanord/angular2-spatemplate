import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
	selector: 'app',
	providers: [AuthService],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(public auth: AuthService) {

		// Login Handler
		auth.handleAuthentication();
	}
}
