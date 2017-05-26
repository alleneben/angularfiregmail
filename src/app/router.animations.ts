import {trigger, state, animate, style, transition,AnimationEntryMetadata,keyframes} from '@angular/core';

export function moveIn() {
  return trigger('moveIn', [
    state('void', style({position: 'fixed', width: '100%'}) ),
    state('*', style({position: 'fixed', width: '100%'}) ),
    transition(':enter', [
      style({opacity:'0', transform: 'translateX(100px)'}),
      animate('.9s ease-in-out', style({opacity:'1', transform: 'translateX(0)'}))
    ]),
    transition(':leave', [
      style({opacity:'1', transform: 'translateX(0)'}),
      animate('.3s ease-in-out', style({opacity:'0', transform: 'translateX(-200px)'}))
    ])
  ]);
}

export function fallIn() {
  return trigger('fallIn', [
    transition(':enter', [
      style({opacity:'0', transform: 'translateY(40px)'}),
      animate('.6s .1s ease-in-out', style({opacity:'1', transform: 'translateY(0)'}))
    ]),
    transition(':leave', [
      style({opacity:'1', transform: 'translateX(0)'}),
      animate('.3s ease-in-out', style({opacity:'0', transform: 'translateX(-200px)'}))
    ])
  ]);
}

export function moveInLeft() {
  return trigger('moveInLeft', [
    state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
    transition(':enter', [
      style({opacity:'0', transform: 'translateX(-100px)'}),
      animate('.8s .2s ease-in-out', style({opacity:'1', transform: 'translateX(0)'}))
    ])
  ]);
}

export function moveInRight() {
  return trigger('moveInRight', [
    state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
    transition(':enter', [
      style({opacity:'0', transform: 'translateX(100px)'}),
      animate('.8s .2s ease-in-out', style({opacity:'1', transform: 'translateX(0)'}))
    ])
  ]);
}

export function flyInBottomFast() {
  return   trigger('flyInBottomFast', [
    state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({transform: 'translate3d(0,2000px,0)'}),
        animate('1000ms 100ms ease-in-out')
      ])
    ])
}

export function bounceInBottom(){
  return trigger('bounceInBottom', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        animate('2000ms 200ms ease-in', keyframes([
          style({transform: 'translate3d(0,2000px,0)', offset: 0}),
          style({transform: 'translate3d(0,-20px,0)', offset: 0.9}),
          style({transform: 'translate3d(0,0,0)', offset: 1}) 
        ]))
      ])
    ])
}

export function fadeIn(){
  return trigger('fadeIn', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({transform: 'translate3d(0,2000px,0)'}),
        animate('2000ms 1000ms ease-in-out')
      ])
    ])
}
