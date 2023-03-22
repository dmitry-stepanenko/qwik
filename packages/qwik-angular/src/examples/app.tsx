import { Component } from '@angular/core';
import { qwikify$ } from '../angular/qwikify';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `Hello from Angular!`,
})
export class AppComponent {}

export const App = qwikify$(AppComponent);
