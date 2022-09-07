import VListener from "../../src/lib/v-listener/index";
describe("VListener", () => {
  it("should make a new VListener", () => {
    const vListener = new VListener();
    expect(vListener).toBeInstanceOf(VListener);
  });
  it("should add new arrays with the register", () => {
    const vListener = new VListener();
    vListener.register([
      {
        array: ["array"],
        callback: () => {
          return true;
        },
      },
    ]);
    expect(vListener.getNrOfListeners()).toBe(1);
  });
  it("should check if the callback is called when the array is changed", () => {
    const vListener = new VListener();
    const callback = jest.fn();
    const array = ["array"];
    vListener.register([
      {
        array,
        callback: callback,
      },
    ]);
    array.push("array2");
    expect(callback).toHaveBeenCalled();
  });
  it("should check if the the array is not added when the callback returns false", () => {
    const vListener = new VListener();
    const callback = jest.fn().mockReturnValue(false);
    const array = ["array"];
    vListener.register([
      {
        array,
        callback,
      },
    ]);
    const prevSize: number = array.length;
    array.push("array2");
    expect(callback).toHaveBeenCalled();
    expect(vListener.getNrOfListeners()).toBe(prevSize);
  });
  it("should check if the register throws an error when passed an fake array", () => {
    const vListener = new VListener();
    expect(() => {
      vListener.register([
        {
          array: "array" as unknown as Array<any>,
          callback: () => {
            return true;
          },
        },
      ]);
    }).toThrowError("Invalid arguments");
  });
  it("should check if the remove removes the array from the arraySet", () => {
    const vListener = new VListener();
    const array = ["array"];
    vListener.register([
      {
        array,
        callback: () => {
          return true;
        },
      },
    ]);
    vListener.remove([{ array }]);
    expect(vListener.getNrOfListeners()).toBe(0);
  });
  it("should check if the remove throws an error when passed an fake array", () => {
    const vListener = new VListener();
    expect(() => {
      vListener.remove([{ array: "array" as unknown as Array<any> }]);
    }).toThrowError("Invalid arguments");
  });
  it("should check if values are added to the array after the remove", () => {
    const vListener = new VListener();
    const array = ["array"];
    vListener.register([
      {
        array,
        callback: () => {
          return false;
        },
      },
    ]);
    const prevLength = array.length;
    array.push("");
    expect(array.length).toBe(prevLength);
    expect(vListener.getNrOfListeners()).toBe(1);
    vListener.remove([{ array }]);
    expect(vListener.getNrOfListeners()).toBe(0);
    array.push("array2");
    expect(array.length).toBe(prevLength + 1);
  });
  it("should test if values are only added if strict is true and the callback returns true", () => {
    const vListener = new VListener();
    const array = ["array"];
    vListener.register([
      {
        array: array,
        callback: jest
          .fn(() => {
            return true;
          })
          .mockReturnValueOnce(false),
        options: {
          strict: true,
          condition: true,
        },
      },
    ]);
    const prevLength = array.length;
    array.push("", "valid"); // should not be added
    expect(array.length).toBe(prevLength);

    array.push("array2");
    expect(array.length).toBe(prevLength + 1);
  });
});
