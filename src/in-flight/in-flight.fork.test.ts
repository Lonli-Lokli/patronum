import { createDomain, sample, fork, allSettled } from 'effector';

import { inFlight } from './index';

describe('effects', () => {
  test('works in forked scope', async () => {
    const app = createDomain();
    const effect1 = app.createEffect({
      handler: () => new Promise((resolve) => setTimeout(resolve, 1)),
    });
    const effect2 = app.createEffect({
      handler: () => new Promise((resolve) => setTimeout(resolve, 1)),
    });
    const $count = inFlight({ effects: [effect1, effect2] });
    const scope = fork();

    const finish = allSettled(effect1, { scope });
    expect(scope.getState($count)).toMatchInlineSnapshot(`1`);

    await finish;
    expect(scope.getState($count)).toMatchInlineSnapshot(`0`);
  });

  test('concurrent run of different effects', async () => {
    const app = createDomain();
    const effect1 = app.createEffect({
      handler: () => new Promise((resolve) => setTimeout(resolve, 10)),
    });
    const effect2 = app.createEffect({
      handler: () => new Promise((resolve) => setTimeout(resolve, 50)),
    });
    const $count = inFlight({ effects: [effect1, effect2] });
    const run = app.createEvent();
    sample({ clock: run, target: [effect1, effect2] });

    const scope = fork();
    expect(scope.getState($count)).toMatchInlineSnapshot(`0`);

    const finish = allSettled(run, { scope });
    expect(scope.getState($count)).toMatchInlineSnapshot(`2`);

    await finish;
    expect(scope.getState($count)).toMatchInlineSnapshot(`0`);
  });
});

describe('domain', () => {
  test('works in forked scope', async () => {
    const domain = createDomain();
    const effect1 = domain.createEffect({
      handler: () => new Promise((resolve) => setTimeout(resolve, 1)),
    });
    const _effect2 = domain.createEffect({
      handler: () => new Promise((resolve) => setTimeout(resolve, 1)),
    });
    const $count = inFlight({ domain });
    const scope = fork();

    const finish = allSettled(effect1, { scope });
    expect(scope.getState($count)).toMatchInlineSnapshot(`1`);

    await finish;
    expect(scope.getState($count)).toMatchInlineSnapshot(`0`);
  });

  test('concurrent run of different effects', async () => {
    const domain = createDomain();
    const effect1 = domain.createEffect({
      handler: () => new Promise((resolve) => setTimeout(resolve, 10)),
    });
    const effect2 = domain.createEffect({
      handler: () => new Promise((resolve) => setTimeout(resolve, 50)),
    });
    const $count = inFlight({ domain });
    const run = domain.createEvent();
    sample({ clock: run, target: [effect1, effect2] });

    const scope = fork();
    expect(scope.getState($count)).toMatchInlineSnapshot(`0`);

    const finish = allSettled(run, { scope });
    expect(scope.getState($count)).toMatchInlineSnapshot(`2`);

    await finish;
    expect(scope.getState($count)).toMatchInlineSnapshot(`0`);
  });
});
