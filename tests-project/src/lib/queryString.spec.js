const { queryString } = require("./queryString");

describe("Object to query string", () => {
  test("should be create a valide query string", () => {
    const obj = {
      name: "Thiago",
      profession: "Developer",
    };

    expect(queryString(obj)).toBe("name=Thiago&profession=Developer");
  });
});
