const strategies = [
  {
    "name": "Compounder",
    "key": "CurveStargateCompounder",
    "resolver": "curveStargateCompounder",
    "description": "description",
    "compatibleAdapters": ["StargateLpStakingAdapter", "CurveGaugeAdapter"],
    "requiredAssets": [
      "0x0Faf1d2d3CED330824de3B8200fc8dc6E397850d",
      "0xdf0770dF86a8034b3EFEf0A1Bb3c889B8332FF56",
      "0x38EA452219524Bb87e18dE1C24D3bB59510BD783",
      "0xfA0F307783AC21C39E939ACFF795e27b650F6e68",
      "0xE8F55368C82D38bbbbDb5533e7F56AfC2E978CC2"
    ],
    "logoURI": "https://forum.popcorn.network/uploads/default/optimized/1X/4ad0b80c41129e6d8b04d49799bbbfcc6c8e9a91_2_32x32.png",
    "requiredNetworks": [1],
    "initParams": [
      {
        "name": "Reward Token",
        "type": "address",
        "requirements": ["Required"],
        "description": "Addresses of reward tokens",
        "multiple": true
      },
      {
        "name": "Minimum Trade Amounts",
        "type": "uint256",
        "requirements": ["Required"],
        "description": "The minimum amount of tokens to trade (in wei)",
        "multiple": true
      },
      {
        "name": "Base Asset",
        "type": "address",
        "requirements": ["Required"],
        "description": "Middle asset to trade through"
      },
      {
        "name": "Stargate Router",
        "type": "uint256",
        "requirements": ["Required"],
        "description": "Stargate Router Address"
      }
    ]
  },
  {
    "name": "Compounder",
    "key": "CurveCompounder",
    "resolver": "curveCompounder",
    "description": "description",
    "compatibleAdapters": ["CurveGaugeAdapter", "ConvexAdapter"],
    "logoURI": "https://forum.popcorn.network/uploads/default/optimized/1X/4ad0b80c41129e6d8b04d49799bbbfcc6c8e9a91_2_32x32.png",
    "requiredNetworks": [1],
    "initParams": [
      {
        "name": "Reward Token",
        "type": "address",
        "requirements": ["Required"],
        "description": "Addresses of reward tokens",
        "multiple": true
      },
      {
        "name": "Minimum Trade Amounts",
        "type": "uint256",
        "requirements": ["Required"],
        "description": "The minimum amount of tokens to trade (in wei)",
        "multiple": true
      },
      {
        "name": "Base Asset",
        "type": "address",
        "requirements": ["Required"],
        "description": "Middle asset to trade through"
      }
    ]
  },
  {
    "name": "Compounder",
    "key": "BalancerLpCompounder",
    "resolver": "balancerLpCompounder",
    "description": "description",
    "compatibleAdapters": ["BalancerGaugeAdapter", "AuraAdapter"],
    "logoURI": "https://forum.popcorn.network/uploads/default/optimized/1X/4ad0b80c41129e6d8b04d49799bbbfcc6c8e9a91_2_32x32.png",
    "requiredNetworks": [1],
    "initParams": [
      {
        "name": "Reward Token",
        "type": "address",
        "requirements": ["Required"],
        "description": "Addresses of reward tokens",
        "multiple": true
      },
      {
        "name": "Minimum Trade Amounts",
        "type": "uint256",
        "requirements": ["Required"],
        "description": "The minimum amount of tokens to trade (in wei)",
        "multiple": true
      },
      {
        "name": "Base Asset",
        "type": "address",
        "requirements": ["Required"],
        "description": "Middle asset to trade through"
      },
      {
        "name": "Optional Data",
        "type": "bytes32",
        "requirements": ["Required"],
        "description": "Pool Id of the LpToken and Index of the DepositToken",
        "multiple": true
      }
    ]
  }
]
export default strategies;