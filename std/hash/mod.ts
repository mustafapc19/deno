// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.

import { Hash } from "./_wasm/hash.ts";
import type { Hasher } from "./hasher.ts";

import { HmacHash } from "./_wasm/hmac_hash.ts";
import type { HmacHasher } from "./hmac_hasher.ts";

export type { Hasher } from "./hasher.ts";
export type SupportedAlgorithm =
  | "md2"
  | "md4"
  | "md5"
  | "ripemd160"
  | "ripemd320"
  | "sha1"
  | "sha224"
  | "sha256"
  | "sha384"
  | "sha512"
  | "sha3-224"
  | "sha3-256"
  | "sha3-384"
  | "sha3-512"
  | "keccak224"
  | "keccak256"
  | "keccak384"
  | "keccak512";

export type { HmacHasher } from "./hmac_hasher.ts";
export type HmacSupportedAlgorithm =
  | "sha256"
  | "sha512";

/**
 * Creates a new `Hash` instance.
 *
 * @param algorithm name of hash algorithm to use
 */
export function createHash(algorithm: SupportedAlgorithm): Hasher {
  return new Hash(algorithm as string);
}

/**
 * Creates a new `HmacHash` instance.
 *
 * @param algorithm name of hash algorithm to use
 */
export function createHmacHash(
  algorithm: HmacSupportedAlgorithm,
  key: string,
): HmacHasher {
  return new HmacHash(algorithm as string, key);
}
