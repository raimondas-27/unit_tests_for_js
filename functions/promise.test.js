const getUser = require("./promise.js");


test("email should be Shanna@melissa.tv", () => {
   expect.assertions(1);
   return getUser().then((data) => {
      expect(data.email).toBe("Shanna@melissa.tv")
   })
})