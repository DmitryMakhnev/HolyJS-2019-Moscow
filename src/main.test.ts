import * as assert from 'assert';
import { run } from './main';

describe('main', () => {

  it('run for work by wallaby stuff', done => {
    run();
    assert.ok(true);
    setTimeout(
      () => {
        done()
      },
      17
    );
  });

});


