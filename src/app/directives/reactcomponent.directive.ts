import { Directive } from '@angular/core';
import { ComponentProps, createElement, ElementType } from 'react';
import { createRoot } from 'react-dom/client';

@Directive({
  selector: '[appReactcomponent]',
  // standalone: true,
})
export class ReactcomponentDirective {
  constructor() {}
}
