import { Component, VERSION } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div class="content">
      <h1>
        That's template for standalone Angular v{{version}}
      </h1> 
      <ul class="features">        
        <li>all components are standalone</li>
        <li>application is standalone</li>
        <li>tsconfig.paths supported</li>
      </ul>
      <router-outlet></router-outlet>
  `,
  imports: [RouterOutlet],
  styles: [],
})
export class AppComponent {
  version = VERSION.full;
}
