import {Component} from "@angular/core";

@Component({
    selector:'app-custom-footer',
    // template:`<h2> Footer <h2>`,
    // styles:[`
    //     h2{
    //         color:blue;
    //     }
    //     `]

    templateUrl:'./customFooter.html',
    styleUrls:['./customFooter.css'],
})


export class CustomComponentFooter{
    title = "Custom Component footer";
}