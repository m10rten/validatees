/* eslint-disable no-console */
import { isFalsy } from "../types";

export class VListener {
  private arrays: Array<any> = [];
  constructor() {}
  public registerListeners(args: Array<any>): void {
    console.log(args);
    args.forEach((arg) => {
      if (arg.array) {
        listenToChangesInArray(arg.array, arg.callback);
        this.arrays.push({ array: arg.array, id: Math.random() * 1000 });
        // } else if (arg.object) {
        //   // for now only arrays, and objects must be witin an array.
        //   listenToChangesInObject(arg.object, arg.callback);
        //   // listenToChangesInObjectV2(arg.object, arg.callback);
        //   this.arrays.push({ object: arg.object, id: Math.random() * 1000 });
      } else {
        console.error("Invalid arguments");
        throw new Error("Invalid arguments");
      }
    });
  }
}

export default VListener;

// testing code \/
const vListener = new VListener();
const arr1: Array<any> = [];
const obj: any = {};
export const listenToChangesInArray = (arr: Array<any>, callback: (...args: any) => any) => {
  arr.push = function (...items: any[]): number {
    const res = Array.prototype.push.apply(arr, items);
    items.forEach((item: any) => {
      console.log("callback arr", item);

      const cb = callback.apply(item, arguments as any);
      console.log("callback res arr", cb);
    });
    return res;
  };
};
export const listenToChangesInObject = (obj: object, callback: (...args: any) => any) => {
  // Object.defineProperty(obj, "prop", {
  //   set: function (value: any) {
  //     console.log("callback obj", value);

  //     const res = callback.apply(value, arguments as any);
  //     //
  //     console.log("callback res obj", res);
  //     return value;
  //   },
  // });
  // obj.set = function (key: string, value: any) {
  //   console.log("callback obj", key, value);

  //   const res = callback.apply(value, arguments as any);
  //   //
  //   console.log("callback res obj", res);
  //   return value;
  // };
  // listen to changes in object
  const handler = {
    set: function (obj: any, prop: string, value: any) {
      console.log("callback obj", prop, value, obj);

      const res = callback.apply(value, arguments as any);
      //
      console.log("callback res obj", res);
      return value;
    },
  };
  const proxy = new Proxy(obj, handler);
  return proxy;
};
export const listenToChangesInObjectV2 = (object: object, callback: (...args: any) => any) => {
  const handler: ProxyHandler<any> = {
    get(target: any, property: any, receiver: any) {
      try {
        return new Proxy(target[property], handler);
      } catch (err) {
        return Reflect.get(target, property, receiver);
      }
    },
    set(target: any, key: any, value: any, receiver: any) {
      console.log("callback obj", value);

      const res = callback.apply(value, arguments as any);
      //
      console.log("callback res obj", res);
      return Reflect.set(target, key, value, receiver);
    },
    defineProperty(target: any, property: any, descriptor: any) {
      console.log("callback desc", descriptor);
      console.log("callback prop", property);
      console.log("callback target", target);

      const res = callback();
      console.log(res);

      return Reflect.defineProperty(target, property, descriptor);
    },
    deleteProperty(target: any, property: any) {
      console.log("callback prop", property);
      console.log("callback target", target);
      const res = callback();
      console.log(res);

      return Reflect.deleteProperty(target, property);
    },
  };

  return new Proxy(object, handler);
};
vListener.registerListeners([
  { array: arr1, callback: isFalsy },
  { array: [obj], callback: isFalsy },
]);
arr1.push(1);
obj.prop = 4;
console.log(arr1);
console.log(obj);
arr1.push("");
