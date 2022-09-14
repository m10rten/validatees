export class VListener {
  private arraySet: Set<{ id: number; array: Array<any> }> = new Set();
  public register(
    args: Array<{
      array: Array<any>;
      callback: <T = any>(value: T) => boolean | Array<<T = any>(value: T) => boolean>;
      options?: { condition?: boolean; strict?: boolean };
    }>,
  ): void {
    args.forEach((arg) => {
      const options: { condition: boolean; strict: boolean } = {
        condition: arg.options?.condition ?? true,
        strict: arg.options?.strict ?? false,
      };
      if (arg.array && Array.isArray(arg.array)) {
        const callbackArray: Array<any> = [];
        if (arg.callback && typeof arg.callback === "function") {
          callbackArray.push(arg.callback);
        } else {
          callbackArray.push([...arg.callback]);
        }
        listenToChangesInArray(arg.array, callbackArray, options);
        this.arraySet.add({ id: Math.floor(Math.random() * 10000), array: arg.array });
      } else {
        throw new Error("Invalid arguments");
      }
    });
  }
  public remove(args: Array<{ array: Array<any> }>): void {
    args.forEach((arg) => {
      if (!arg.array || false === Array.isArray(arg.array)) {
        throw new Error("Invalid arguments");
      }
      this.arraySet.forEach((set) => {
        if (arg.array === set.array) {
          set.array.push = Array.prototype.push;
          this.arraySet.delete(set);
        }
      });
    });
  }
  public getNrOfListeners(): number {
    return this.arraySet.size;
  }
}

export default VListener;

const listenToChangesInArray = (
  arr: Array<any>,
  callbacks: Array<(...args: any) => boolean>,
  options: { condition: boolean; strict: boolean },
) => {
  let canPush: boolean = true;
  arr.push = function (...items: any[]): number {
    canPush = true;
    const passed = items.filter((item: any) => {
      const cb: boolean = callbacks.every((func) => {
        // console.log(func.toString());
        console.log(func(item).toString());
        // func(item);
      });
      if (cb === options.condition) {
        return true;
      } else {
        canPush = false;
        return false;
      }
    });

    if ((false === options.strict || (true === options.strict && true === canPush)) && passed.length > 0) {
      return Array.prototype.push.apply(arr, passed);
    } else {
      return arr.length;
    }
  };
};
