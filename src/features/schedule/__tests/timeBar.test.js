import { convertToTimeInterval } from "../components";

test("time converter converts time", () => {
  expect(convertToTimeInterval([1, 2])).toBe(`1 am to 2 am`);
  expect(convertToTimeInterval([14, 15])).toBe(`2 pm to 3 pm`);
  expect(convertToTimeInterval([23, 24])).toBe(`11 pm to 12 pm`);
});

xtest("cant have two dates on teh same time", () => {});

// xtest it can delete a time
// if only one time then deleting remove steh date from teh calendar
