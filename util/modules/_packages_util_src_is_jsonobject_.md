[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util/src/is/jsonObject"](_packages_util_src_is_jsonobject_.md)

# Module: "packages/util/src/is/jsonObject"

## Index

### Functions

* [isJsonObject](_packages_util_src_is_jsonobject_.md#isjsonobject)

## Functions

###  isJsonObject

▸ **isJsonObject**(`value`: unknown): *value is ObjectIndexed*

*Defined in [packages/util/src/is/jsonObject.ts:34](https://github.com/polkadot-js/common/blob/2f7d5cd4/packages/util/src/is/jsonObject.ts#L34)*

**`name`** isJsonObject

**`summary`** Tests for a valid JSON `object`.

**`description`** 
Checks to see if the input value is a valid JSON object.
It returns false if the input is JSON parsable, but not an Javascript object.

**`example`** 
<BR>

```javascript
import { isJsonObject } from '@polkadot/util';

isJsonObject({}); // => true
isJsonObject({
 "Test": "1234",
 "NestedTest": {
  "Test": "5678"
 }
}); // => true
isJsonObject(1234); // JSON parsable, but not an object =>  false
isJsonObject(null); // JSON parsable, but not an object => false
isJsonObject('not an object'); // => false
```

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *value is ObjectIndexed*
