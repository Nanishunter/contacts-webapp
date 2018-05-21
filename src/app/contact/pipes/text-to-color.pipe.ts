import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textToColor'
})
export class TextToColorPipe implements PipeTransform {

  defaultColor = '#e54304';
  colors = {
    'a': '#3d00e0',
    'b ': '#DCE775',
    'c': '#DCE775',
    'd': '#DCE775',
    'e': '#e54304',
    'f': '#e54304',
    'g': '#e54304',
    'h': '#e54304',
    'i': '#e54304',
    'j': '#e54304',
    'k': '#DCE775',
    'l': '#DCE775',
    'm': '#DCE775',
    'n': '#90ee02',
    'o': '#DCE775',
    'p': '#DCE775',
    'q': '#e54304',
    'r': '#DCE775',
    's': '#DCE775',
    't': '#e54304',
    'u': '#DCE775',
    'w': '#DCE775',
    'x': '#DCE775',
    'y': '#DCE775',
    'z': '#DCE775',








  };
  transform(value: any, args?: any): any {
    if (value == null || value === '') {
  return this.defaultColor;
    }
    const firstChar = value.charAt(0).toLowerCase();
    return this.colors[firstChar];


  }

}
