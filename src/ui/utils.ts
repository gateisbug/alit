export function prefix(name: string) {
  return (str: string) => `kit-${name}-${str}`;
}

// type PossibleClassNameType =
//   | string
//   | number
//   | boolean
//   | Record<string, boolean | undefined>
//   | undefined
//   | null;
//
// export function combineClass(...args: PossibleClassNameType[]): string {
//   const output: string[] = [];
//
//   for (let i = 0; i < args.length; i++) {
//     if (args[i] === null || args[i] === undefined) continue;
//
//     if (typeof args[i] === 'string') {
//       output.push(args[i] as string);
//     } else if (typeof args[i] === 'object') {
//       const o = args[i] as Record<string, boolean | undefined>;
//       const key = Object.keys(o)[0];
//       if (o[key]) {
//         output.push(key);
//       }
//     } else if (typeof args[i] === 'number' || typeof args[i] === 'boolean') {
//       output.push(String(args[i]));
//     }
//   }
//
//   return output.join(' ');
// }
