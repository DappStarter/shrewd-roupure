require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict drum off uphold drift rice saddle puppy install nasty equal gauge'; 
let testAccounts = [
"0x8ba443e1b7bf44c7f30abe096a1c51cc6b5e82442d0682fdf1a350cef1f1abbe",
"0x2853cb9b3a44113a1ff0dcec90031cdf8b5d3c96218e21a6add55172941124ae",
"0x7f0d49591ed1b49c0e7d95e5b3d20f76539d474b1acca02e164089d4245d93b6",
"0x17f6d3e544f2a9d0fb53e6667a78dcb9072bb895cb39e03eba1f8ee36a60387c",
"0x540105a3a07361907ced45576ff8b7f48867989aa6e16bd909f0335c0a24267a",
"0xa15a832517f2e14f8146fcdba97b5ac6a41ff50f654026a34ce7d1bbfd27e5fc",
"0x934ded9df0b7dc162ae56be165c82120d5ea095164273c5ba12f18ae8c96e023",
"0xb86843c25e3db939ab857b191cb428ea2f74191f72873412c3de443b2b216a52",
"0xf8831aa095d858f7941bfdf5a640529190ac5dd132cac561621556af616abde5",
"0x818b2e86ca6b6e0cad8d49c4bc89c79de600b936e5d2cceeb177a9b1eaa47760"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
