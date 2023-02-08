import { IntoWordsPipe } from './into-words.pipe';

describe('IntoWordsPipe', () => {
  let pipe :IntoWordsPipe;

  it('create an instance', () => {
    pipe = new IntoWordsPipe();
    expect(pipe).toBeTruthy();
  });

  it('should tranform 123 into ONE TWO THREE',()=>{
    expect(pipe.transform(123)).toEqual('ONE TWO THREE');
  });
});
