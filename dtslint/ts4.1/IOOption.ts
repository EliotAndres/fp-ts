import * as _ from '../../src/IOOption'
import { pipe } from '../../src/function'

declare const n: number
declare const sn: string | number
declare const isString: (u: unknown) => u is string
declare const predicate: (sn: string | number) => boolean

// -------------------------------------------------------------------------------------
// fromRefinement
// -------------------------------------------------------------------------------------

// $ExpectType IOOption<string>
pipe(sn, _.fromRefinement(isString))
pipe(
  sn,
  _.fromRefinement(
    (
      n // $ExpectType string | number
    ): n is number => typeof n === 'number'
  )
)

// -------------------------------------------------------------------------------------
// fromPredicate
// -------------------------------------------------------------------------------------

// $ExpectType IOOption<string | number>
pipe(sn, _.fromPredicate(predicate))
// $ExpectType IOOption<number>
pipe(n, _.fromPredicate(predicate))
// $ExpectType IOOption<number>
pipe(
  n,
  _.fromPredicate(
    (
      _n // $ExpectType number
    ) => true
  )
)