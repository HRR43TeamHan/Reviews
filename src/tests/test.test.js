const PORT = process.env.PORT || 3030;

test('super simple jest variable test that PORT is 3030', () => {
  expect(PORT).toBe(3030);
});