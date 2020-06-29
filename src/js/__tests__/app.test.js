import findPaySys from '../app';

const inter = ['amer', 'din', 'dis', 'jcb', 'master', 'visa'];
let coin = 0;
test.each(['371449635398431', '30569309025904', '6011111111111117', '3530111333300000', '5555555555554444', '4111111111111111'])(('should equal'), (a) => {
  // for (let value of inter) {
  expect(inter[coin]).toEqual(findPaySys(a));
  coin++;
  // }
});
