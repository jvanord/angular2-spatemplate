import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { APP_CONFIG } from '../../config';

@Component({
	selector: 'nav-menu',
	providers: [AuthService],
	templateUrl: './navmenu.component.html',
	styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {
	public readonly appName = APP_CONFIG.name;
	constructor(public auth: AuthService) {
	}
}
