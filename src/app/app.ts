
import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1>'
})

export class AppComponent { 

  public title = 'Angular 2 works!';

}

import {bootstrap}    from 'angular2/platform/browser'


bootstrap(AppComponent);
 