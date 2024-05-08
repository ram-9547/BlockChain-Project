require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/0bQOPd4o_VoDENRpPxVeVrmRJ3Yo3b3p',
      accounts: ['415a30ce2d535a34ab9dead6bd0686da90061424ea5e33b2f003f55b62f70fc3'],
    },
  },
};