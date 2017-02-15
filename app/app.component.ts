import { Component } from '@angular/core';
import { Md2Toast } from 'md2';
import { Http } from '@angular/http';
@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styles: [`
    .collapse { display: none; }
    .collapse.in { display: block; }
    .collapsing { position: relative; height: 0; overflow: hidden; -moz-transition: height, visibility 0.35s ease; -o-transition: height, visibility 0.35s ease; -webkit-transition: height, visibility 0.35s ease; transition: height, visibility 0.35s ease; }
  `],
})
export class AppComponent {
  private accordions: Array<any> = [
    { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
    { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true },
    { title: 'Dynamic Title 3', content: 'Dynamic content 3', active: true }
  ];

  multiple: boolean = false;

  private disabled: boolean = false;
  private items: Array<any> = [
    { name: 'Amsterdam', value: '1' },
    { name: 'Birmingham', value: '2' },
    { name: 'Dortmund', value: '3' },
    { name: 'Gothenburg', value: '4' },
    { name: 'London', value: '5' },
    { name: 'Seville', value: '6' }
  ];
  private item: any;

  private isCollapsedContent: boolean = false;
  private isCollapsedImage: boolean = true;

  private color: string = '#123456';
  private color2: string = '#654321';
  private date: any = '2015-12-25';

  private dialogHeader: string = 'Lorum Ipsum';

  private launchDialog(dialog: any) {
    dialog.show();
  }

  private show(dialog: any) {
    dialog.show();
  }

  private close(dialog: any) {
    dialog.close();
  }
  private tabs: Array<any> = [
    { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
    { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true },
    { title: 'Dynamic Title 3', content: 'Dynamic content 3' }
  ];

  private change(tab: Event) {
    console.log('Tab Changed');
  };

  private dynamicTooltip: string = 'Hello, World!';
  private dynamicTooltipText: string = 'dynamic';
  private htmlTooltip: string = 'I\'ve been made <b>bold</b>!';

  private multiItems: Array<any> =
  [
    { name: 'Amsterdam', value: '1' },
    { name: 'Birmingham', value: '2' },
    { name: 'Dortmund', value: '3' },
    { name: 'Gothenburg', value: '4' },
    { name: 'London', value: '5' },
    { name: 'Seville', value: '6' }
  ];
  private multiItem: Array<any> = [{ name: 'Birmingham', value: '2' }, { name: 'Dortmund', value: '3' }];
  private SelectItems: Array<any> =
  [
    { name: 'Amsterdam', value: '1', disabled: true },
    { name: 'Birmingham', value: '2', disabled: false },
    { name: 'Dortmund', value: '3', disabled: false },
    { name: 'Gothenburg', value: '4', disabled: true },
    { name: 'London', value: '5', disabled: false },
    { name: 'Seville', value: '6', disabled: true }
  ];
  private SelectItem: string = '3';

  private tags: Array<any> =
  [
    { name: 'Amsterdam', value: '1' },
    { name: 'Birmingham', value: '2' },
    { name: 'Dortmund', value: '3' },
    { name: 'Gothenburg', value: '4' },
    { name: 'London', value: '5' },
    { name: 'Seville', value: '6' }
  ];
  private tag: Array<any> = [
    { name: 'Dortmund', value: '3' },
    { name: 'Gothenburg', value: '4' }
  ];
  data: any = null;

  constructor(private toast: Md2Toast, private http: Http) {
    this.http.get('./app/data.json')
      .subscribe((data) => {
        this.data = data.json();
      });
  }
  toastMe() {
    this.toast.toast('test message...');
  }

}
