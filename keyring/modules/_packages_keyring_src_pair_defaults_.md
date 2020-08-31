[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/keyring/src/pair/defaults"](_packages_keyring_src_pair_defaults_.md)

# Module: "packages/keyring/src/pair/defaults"

## Index

### Variables

* [ENCODING](_packages_keyring_src_pair_defaults_.md#const-encoding)
* [NONCE_LENGTH](_packages_keyring_src_pair_defaults_.md#const-nonce_length)
* [PKCS8_DIVIDER](_packages_keyring_src_pair_defaults_.md#const-pkcs8_divider)
* [PKCS8_HEADER](_packages_keyring_src_pair_defaults_.md#const-pkcs8_header)
* [PUB_LENGTH](_packages_keyring_src_pair_defaults_.md#const-pub_length)
* [SALT_LENGTH](_packages_keyring_src_pair_defaults_.md#const-salt_length)
* [SCRYPT_LENGTH](_packages_keyring_src_pair_defaults_.md#const-scrypt_length)
* [SEC_LENGTH](_packages_keyring_src_pair_defaults_.md#const-sec_length)
* [SEED_LENGTH](_packages_keyring_src_pair_defaults_.md#const-seed_length)

## Variables

### `Const` ENCODING

• **ENCODING**: *[KeyringPair$JsonEncodingTypes](_packages_keyring_src_types_.md#keyringpairjsonencodingtypes)[]* = ['scrypt', 'xsalsa20-poly1305']

*Defined in [packages/keyring/src/pair/defaults.ts:7](https://github.com/polkadot-js/common/blob/37d1bcb6e/packages/keyring/src/pair/defaults.ts#L7)*

___

### `Const` NONCE_LENGTH

• **NONCE_LENGTH**: *24* = 24

*Defined in [packages/keyring/src/pair/defaults.ts:8](https://github.com/polkadot-js/common/blob/37d1bcb6e/packages/keyring/src/pair/defaults.ts#L8)*

___

### `Const` PKCS8_DIVIDER

• **PKCS8_DIVIDER**: *Uint8Array‹›* = new Uint8Array([161, 35, 3, 33, 0])

*Defined in [packages/keyring/src/pair/defaults.ts:9](https://github.com/polkadot-js/common/blob/37d1bcb6e/packages/keyring/src/pair/defaults.ts#L9)*

___

### `Const` PKCS8_HEADER

• **PKCS8_HEADER**: *Uint8Array‹›* = new Uint8Array([48, 83, 2, 1, 1, 48, 5, 6, 3, 43, 101, 112, 4, 34, 4, 32])

*Defined in [packages/keyring/src/pair/defaults.ts:10](https://github.com/polkadot-js/common/blob/37d1bcb6e/packages/keyring/src/pair/defaults.ts#L10)*

___

### `Const` PUB_LENGTH

• **PUB_LENGTH**: *32* = 32

*Defined in [packages/keyring/src/pair/defaults.ts:11](https://github.com/polkadot-js/common/blob/37d1bcb6e/packages/keyring/src/pair/defaults.ts#L11)*

___

### `Const` SALT_LENGTH

• **SALT_LENGTH**: *32* = 32

*Defined in [packages/keyring/src/pair/defaults.ts:12](https://github.com/polkadot-js/common/blob/37d1bcb6e/packages/keyring/src/pair/defaults.ts#L12)*

___

### `Const` SCRYPT_LENGTH

• **SCRYPT_LENGTH**: *number* = SALT_LENGTH + (3 * 4)

*Defined in [packages/keyring/src/pair/defaults.ts:15](https://github.com/polkadot-js/common/blob/37d1bcb6e/packages/keyring/src/pair/defaults.ts#L15)*

___

### `Const` SEC_LENGTH

• **SEC_LENGTH**: *64* = 64

*Defined in [packages/keyring/src/pair/defaults.ts:13](https://github.com/polkadot-js/common/blob/37d1bcb6e/packages/keyring/src/pair/defaults.ts#L13)*

___

### `Const` SEED_LENGTH

• **SEED_LENGTH**: *32* = 32

*Defined in [packages/keyring/src/pair/defaults.ts:14](https://github.com/polkadot-js/common/blob/37d1bcb6e/packages/keyring/src/pair/defaults.ts#L14)*
