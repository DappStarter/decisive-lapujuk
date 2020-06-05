require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remember method idea prize outer subject'; 
let testAccounts = [
"0x23cad33da81e572f57d88dc082d448c7265ccc851d7dcf3f121da2dac5df04a1",
"0xadc6231d65e272fa284981f3fc82b5a2f271b2ab0ec55ad3404a161929f93530",
"0x57c66872c3f6075a305b32425b57f392e582eeb3afbbd48048770dcc89f814ca",
"0x4fd52a6064679bac94851294bd420f9aa33d32755e95273f0027475a9ba8d291",
"0x78dc2df7102543019bc3d1e1410556137c4fc50253c68567c5f01dded8549976",
"0x1fbb204e0d9c5e39faa35ed43feba8e247cba94bc6e6deb4afdfe74643d8f6b1",
"0x4f30fa2165bd5010cbb83409a10abf6effaab57c144d3f61fe2ec0ed858e7694",
"0xa53d44b0dfe51e85df77277a6cafd4737affb6095aed17a6045fdbc3ffff74ea",
"0x03e564145eba6dd4abe6f979487993c661ed7d1d455908d7c3cef76b6b3d6178",
"0x39e5b1d5888e84a8545d6f58f3917f82b0bfc3a55b40dcc2a469c936d4f87b36"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
