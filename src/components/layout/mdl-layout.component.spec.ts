import {
  describe,
  expect,
  it,
  inject,
  tick,
  beforeEach
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, Optional } from '@angular/core';
import { TestComponentBuilder, ComponentFixture } from '@angular/compiler/testing';
import { MdlLayoutComponent } from './mdl-layout.component';

describe('Component: MdlLayout', () => {

  var builder: TestComponentBuilder;

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should add the css class mdl-layout__container to the child of the host element', ( done ) => {

    return builder
      .overrideTemplate(MdlTestLayoutComponent, `
          <mdl-layout>x</mdl-layout>
        `)
      .createAsync(MdlTestLayoutComponent).then( (fixture) => {

        fixture.detectChanges();

        let layoutEl:HTMLElement = fixture.debugElement.query(By.directive(MdlLayoutComponent)).nativeElement;
        let layoutContainer:HTMLElement = <HTMLElement>layoutEl.children.item(0);
        expect(layoutContainer.classList.contains('mdl-layout__container')).toBe(true);

        let layoutMainElement = <HTMLElement>layoutContainer.children.item(0);
        expect(layoutMainElement.classList.contains('mdl-layout')).toBe(true);
        done();
      })
  });


});


@Component({
  selector: 'test-layout',
  template: "replaced by the test",
  directives: [MdlLayoutComponent]
})
class MdlTestLayoutComponent {}