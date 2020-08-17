[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util/src/compact/toU8a"](_packages_util_src_compact_tou8a_.md)

# Module: "packages/util/src/compact/toU8a"

## Index

### Functions

* [compactToU8a](_packages_util_src_compact_tou8a_.md#compacttou8a)

## Functions

###  compactToU8a

▸ **compactToU8a**(`_value`: BN | BigInt | number): *Uint8Array*

*Defined in [packages/util/src/compact/toU8a.ts:27](https://github.com/polkadot-js/common/blob/72281008/packages/util/src/compact/toU8a.ts#L27)*

**`name`** compactToU8a

**`description`** Encodes a number into a compact representation

**`example`** 
<BR>

```javascript
import { compactToU8a } from '@polkadot/util';

console.log(compactToU8a(511, 32)); // Uint8Array([0b11111101, 0b00000111])
```

**Parameters:**

Name | Type |
------ | ------ |
`_value` | BN &#124; BigInt &#124; number |

**Returns:** *Uint8Array*