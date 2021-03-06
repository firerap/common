// Copyright 2017-2020 @polkadot/keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export interface PairInfo {
  publicKey: Uint8Array;
  secretKey?: Uint8Array;
  seed?: Uint8Array | null;
}
