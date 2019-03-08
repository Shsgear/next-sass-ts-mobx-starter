// import 'react';

// // 使用styled-jsx会与typescipt不兼容
// // 不定义将会报HTMLStyleElement上不存在属性jsx和global的错
// declare module 'react' {
//   interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
//     jsx?: boolean;
//     global?: boolean;
//   }
// }


// tsx内引入scss文件，babel转义时将报错
// cannot find module *.scss
declare module '*.scss' {
  const content: {[className: string]: string};
  export = content;
}