import {Word32Array} from "../../Word32Array";
import {BlockCipherMode} from "./mode/BlockCipherMode";
import {Pad} from "./pad/pad";
import {Formatter} from "./formatter/type";
import {OpenSSLFormatter} from "./formatter/OpenSSLFormatter";
import {BlockCipher} from "./BlockCipher";

/**
 * A collection of cipher parameters.
 *
 * @property {Word32Array} ciphertext The raw ciphertext.
 * @property {Word32Array} key The key to this ciphertext.
 * @property {Word32Array} iv The IV used in the ciphering operation.
 * @property {Word32Array} salt The salt used with a key derivation function.
 * @property {typeof BufferedBlockAlgorithm} algorithm The cipher algorithm.
 * @property {BlockCipherMode} mode The block mode used in the ciphering operation.
 * @property {Pad} padding The padding scheme used in the ciphering operation.
 * @property {number} blockSize The block size of the cipher.
 * @property {Formatter} formatter The default formatting strategy to convert this cipher params object to a string.
 */
export class CipherParams {
  public cipherText?: Word32Array;
  public key?: Word32Array;
  public iv?: Word32Array;
  public salt?: Word32Array;
  public algorithm?: typeof BlockCipher;
  public mode?: BlockCipherMode;
  public padding?: Pad;
  public blockSize?: number;
  public formatter: Formatter = OpenSSLFormatter;
  
  /**
   * Initializes a newly created cipher params object.
   *
   * @param {Partial<CipherParams>} cp An object with any of the possible cipher parameters.
   * @example
   *   var cipherParams = CryptoJS.lib.CipherParams.create({
   *       ciphertext: ciphertextWordArray,
   *       key: keyWordArray,
   *       iv: ivWordArray,
   *       salt: saltWordArray,
   *       algorithm: CryptoJS.algo.AES,
   *       mode: CryptoJS.mode.CBC,
   *       padding: CryptoJS.pad.PKCS7,
   *       blockSize: 4,
   *       formatter: CryptoJS.format.OpenSSL
   *     });
   */
  public constructor(cp?: Partial<CipherParams>) {
    if(cp){
      this.cipherText = cp.cipherText;
      this.key = cp.key;
      this.iv = cp.iv;
      this.salt = cp.salt;
      this.algorithm = cp.algorithm;
      this.mode = cp.mode;
      this.padding = cp.padding;
      this.blockSize = cp.blockSize;
      this.formatter = cp.formatter || OpenSSLFormatter;
    }
  }
  
  /**
   * Converts this cipher params object to a string.
   *
   * @param {Formatter?} formatter (Optional) The formatting strategy to use.
   * @return {string} The stringified cipher params.
   * @throws Error If neither the formatter nor the default formatter is set.
   * @example
   *   var string = cipherParams + '';
   *   var string = cipherParams.toString();
   *   var string = cipherParams.toString(CryptoJS.format.OpenSSL);
   */
  public toString(formatter?: Formatter){
    return (formatter || this.formatter).stringify(this);
  }
}