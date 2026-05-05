import { Component, inject } from "@angular/core";
import { RouterLink, RouterLinkActive  } from "@angular/router";
import { AuthService } from "../auth-service";

@Component({
    selector: 'app-header',
    templateUrl: './header.html',
    styleUrl: './header.css',
    imports: [RouterLink, RouterLinkActive]
}) 
export class Header{
    private auth = inject(AuthService);
    logOut() {
        this.auth.logOut();
    }
    
}