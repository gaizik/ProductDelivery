import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'includes'})
export class includesPipe implements PipeTransform {

  transform(value: any[], term: string): any[] {
    if ((value !== undefined && value.length > 0) && (term !== undefined && term != null)) {

      return value.filter((x:any) => x.name.toLowerCase().includes(term.toLowerCase()))
    }

  }
}


@Pipe({name: 'drupDawon'})
export class drupDawonPipe implements PipeTransform{
  transform(value:any[], stat:number): any[] {
    if (stat == 1) {
      return value.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    }
    else{
      return value.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    })
    }

  }
}
