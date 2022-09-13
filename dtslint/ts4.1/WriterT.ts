import * as _ from '../../src/WriterT'
import * as RTE from '../../src/ReaderTaskEither'
import * as W from '../../src/Writer'
import * as string from '../../src/string'

// -------------------------------------------------------------------------------------
// ap widening
// -------------------------------------------------------------------------------------

const ap = _.ap(RTE.ApplyPar, string.Semigroup)

declare const fab: RTE.ReaderTaskEither<{ r1: 'r1' }, number, W.Writer<string, (n: number) => boolean>>
declare const fa: RTE.ReaderTaskEither<{ r2: 'r2' }, boolean, W.Writer<string, number>>
// $ExpectType ReaderTaskEither<{ r1: "r1"; } & { r2: "r2"; }, number | boolean, Writer<string, boolean>>
ap(fa)(fab)

// -------------------------------------------------------------------------------------
// chain widening
// -------------------------------------------------------------------------------------

// $ExpectType <A, S, R1, FW1, E1, B>(f: (a: A) => ReaderTaskEither<R1, E1, Writer<string, B>>) => <R2, FW2, E2>(ma: ReaderTaskEither<R2, E2, Writer<string, A>>) => ReaderTaskEither<R1 & R2, E1 | E2, Writer<string, B>>
_.chain(RTE.Chain, string.Semigroup)
