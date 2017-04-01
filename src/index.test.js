import greeting from '.';

test('say hello world', ()=> (
  expect(greeting()).toBe('hello world')
));
