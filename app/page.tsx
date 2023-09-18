import { BigInt } from '@emurgo/cardano-serialization-lib-nodejs';

export default function Home() {
  return (
    <>
      {BigInt.from_str('1234').to_str()}
    </>
  )
}
