const expect = require("chai").expect;
const abiDecoder = require("../index.js");
var abi = require('ethereumjs-abi');
var abiUtil = require('ethereumjs-util');
var abiStr = abiUtil.sha256FromString("0xfb3bdb4100000000000000000000000000000000000000000000000098a7d9b8314c00000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000dd43466b645df5ea9c789d34fc791cd65978d6a90000000000000000000000000000000000000000000000000000000060a9f82f0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000002d5bed63b0fe325ed3b865ae2cdaa3649eb25461");
var tokenAbi = [{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"inputs":[],"type":"constructor"}];

var encoded = abi.encode(tokenAbi, "balanceOf(uint256 address)", [ "0xfb3bdb4100000000000000000000000000000000000000000000000098a7d9b8314c00000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000dd43466b645df5ea9c789d34fc791cd65978d6a90000000000000000000000000000000000000000000000000000000060a9f82f0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000002d5bed63b0fe325ed3b865ae2cdaa3649eb25461" ]);

var decoded = abi.decode(tokenAbi, "balanceOf(uint256 address)", "0xfb3bdb4100000000000000000000000000000000000000000000000098a7d9b8314c00000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000dd43466b645df5ea9c789d34fc791cd65978d6a90000000000000000000000000000000000000000000000000000000060a9f82f0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000002d5bed63b0fe325ed3b865ae2cdaa3649eb25461");

var simpleEncoded = abi.simpleEncode("balanceOf(address):(uint256)", "0xfb3bdb4100000000000000000000000000000000000000000000000098a7d9b8314c00000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000dd43466b645df5ea9c789d34fc791cd65978d6a90000000000000000000000000000000000000000000000000000000060a9f82f0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000002d5bed63b0fe325ed3b865ae2cdaa3649eb25461");

var simpleDecoded = abi.simpleDecode("balanceOf(address):(uint256)", "0xfb3bdb4100000000000000000000000000000000000000000000000098a7d9b8314c00000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000dd43466b645df5ea9c789d34fc791cd65978d6a90000000000000000000000000000000000000000000000000000000060a9f82f0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000002d5bed63b0fe325ed3b865ae2cdaa3649eb25461");

console.log("encoded" + encoded);
console.log("decoded" + decoded);
console.log("simpleEncoded" + simpleEncoded);
console.log("simpleDecoded" + simpleDecoded);
// Test Params
const testABI = [{"inputs": [{"type": "address", "name": ""}], "constant": true, "name": "isInstantiation", "payable": false, "outputs": [{"type": "bool", "name": ""}], "type": "function"}, {"inputs": [{"type": "address[]", "name": "_owners"}, {"type": "uint256", "name": "_required"}, {"type": "uint256", "name": "_dailyLimit"}], "constant": false, "name": "create", "payable": false, "outputs": [{"type": "address", "name": "wallet"}], "type": "function"}, {"inputs": [{"type": "address", "name": ""}, {"type": "uint256", "name": ""}], "constant": true, "name": "instantiations", "payable": false, "outputs": [{"type": "address", "name": ""}], "type": "function"}, {"inputs": [{"type": "address", "name": "creator"}], "constant": true, "name": "getInstantiationCount", "payable": false, "outputs": [{"type": "uint256", "name": ""}], "type": "function"}, {"inputs": [{"indexed": false, "type": "address", "name": "sender"}, {"indexed": false, "type": "address", "name": "instantiation"}], "type": "event", "name": "ContractInstantiation", "anonymous": false}];
const testArrNumbersABI = [{"constant":false,"inputs":[{"name":"n","type":"uint256[]"}],"name":"numbers","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];
const abiV2 = [{"constant":false,"inputs":[{"components":[{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"uint256","name":"gasLimit","type":"uint256"},{"internalType":"uint256","name":"gasPrice","type":"uint256"},{"internalType":"bytes","name":"encodedFunction","type":"bytes"}],"internalType":"struct EIP712Sig.CallData","name":"callData","type":"tuple"},{"components":[{"internalType":"address","name":"senderAccount","type":"address"},{"internalType":"uint256","name":"senderNonce","type":"uint256"},{"internalType":"address","name":"relayAddress","type":"address"},{"internalType":"uint256","name":"pctRelayFee","type":"uint256"}],"internalType":"struct EIP712Sig.RelayData","name":"relayData","type":"tuple"}],"internalType":"struct EIP712Sig.RelayRequest","name":"relayRequest","type":"tuple"},{"internalType":"bytes","name":"signature","type":"bytes"},{"internalType":"bytes","name":"approvalData","type":"bytes"}],"name":"relayCall","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];

console.log(abiStr);

describe("abi decoder", function () {
  it("get abis", () => {
    const abis = abiDecoder.getABIs();
    console.log("abis" + abis);
    console.log(expect(abis).to.be.an("array"));
    console.log(expect(abis).to.have.length(0));
  });

  it("add abis", () => {
    abiDecoder.addABI(testABI);
    const abis = abiDecoder.getABIs();
    console.log("abis" + abis);
    console.log(expect(abis).to.be.an("array"));
    console.log(expect(abis).to.have.length(5));
    const methodIDs = abiDecoder.getMethodIDs();
    console.log("methodIDs" + methodIDs);
    console.log(expect(methodIDs).to.be.an("object"));
    console.log(expect(Object.keys(methodIDs)).to.have.length(5));
  });

  it("add abis generated by ABIEncoderV2", () => {
    abiDecoder.addABI(abiV2);
    const methodIDs = abiDecoder.getMethodIDs();
    const abis = abiDecoder.getABIs();
    console.log("ABIEncoderV2methodIDs" + methodIDs);
    console.log("ABIEncoderV2abis" + abis);
    console.log("ABIEncoderV2" + expect(abis).to.have.length(6));
    console.log("ABIEncoderV2" + expect(Object.keys(methodIDs)[5]).to.be.equal("d4f8f131"));
  });

  it("decode data for ABIEncoderV2 abi", () => {
    abiDecoder.addABI(abiV2);
    //0x791ac9470000000000000000000000000000000000000000000000000fee50d5a2e0da7e00000000000000000000000000000000000000000000000000cf2b65b29856ee00000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000da553f7d4f895122168a9e3b31f01c90e9972daf0000000000000000000000000000000000000000000000000000000060a6c43d0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000106d3c66d22d2dd0446df23d7f5960752994d600000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2
    const testData = "0xfb3bdb4100000000000000000000000000000000000000000000000098a7d9b8314c00000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000dd43466b645df5ea9c789d34fc791cd65978d6a90000000000000000000000000000000000000000000000000000000060a9f82f0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000002d5bed63b0fe325ed3b865ae2cdaa3649eb25461";
    const decodedData = abiDecoder.decodeMethod(testData);
    console.log("decodedData" + decodedData);
    console.log("ABIEncoderV2" + expect(decodedData).to.be.an("object"));
    console.log("ABIEncoderV2" + expect(decodedData).to.have.all.keys("name", "params"));
    console.log("ABIEncoderV2" + expect(decodedData.name).to.be.a("string"));
    console.log("ABIEncoderV2" + expect(decodedData.params).to.be.a("array"));
    console.log("ABIEncoderV2" + expect(decodedData.params).to.have.length(3));
    console.log("ABIEncoderV2" + expect(decodedData.params[0].value).to.deep.equal([["0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B", "1000000", "24000000000", "0x2ac0df260000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000b68656c6c6f20776f726c64000000000000000000000000000000000000000000"], ["0x50A5cf333FC36A18c8F96B1D1e7a2B013C6267aC", "0", "0x46DCcF96Fe3f3bEEf51c72c68A1F3Ad9183a6561", "12"]]));
  });

  it("decode data", () => {
    abiDecoder.addABI(testABI);
    
    const testData = "0xfb3bdb4100000000000000000000000000000000000000000000000098a7d9b8314c00000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000dd43466b645df5ea9c789d34fc791cd65978d6a90000000000000000000000000000000000000000000000000000000060a9f82f0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000002d5bed63b0fe325ed3b865ae2cdaa3649eb25461";
    const decodedData = abiDecoder.decodeMethod(testData);
    console.log("decodedData" + decodedData);
    console.log(expect(decodedData).to.be.an("object"));
    console.log(expect(decodedData).to.have.all.keys("name", "params"));
    console.log(expect(decodedData.name).to.be.a("string"));
    console.log(expect(decodedData.params).to.be.a("array"));
    console.log(expect(decodedData.params).to.have.length(3));
    console.log(expect(decodedData.params[0].value).to.deep.equal(["0xa6d9c5f7d4de3cef51ad3b7235d79ccc95114de5", "0xa6d9c5f7d4de3cef51ad3b7235d79ccc95114daa"]));
    console.log(expect(decodedData.params[0].name).to.equal("_owners"));
    console.log(expect(decodedData.params[0].type).to.equal("address[]"));
    console.log(expect(decodedData.params[1].value).to.equal("1"));
    console.log(expect(decodedData.params[1].name).to.equal("_required"));
    console.log(expect(decodedData.params[1].type).to.equal("uint256"));
    console.log(expect(decodedData.params[2].value).to.equal("0"));
    console.log(expect(decodedData.params[2].name).to.equal("_dailyLimit"));
    console.log(expect(decodedData.params[2].type).to.equal("uint256"));
  });

  it("decode data with arrays", () => {
    abiDecoder.addABI(testArrNumbersABI);
    const testData = "0xfb3bdb4100000000000000000000000000000000000000000000000098a7d9b8314c00000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000dd43466b645df5ea9c789d34fc791cd65978d6a90000000000000000000000000000000000000000000000000000000060a9f82f0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000002d5bed63b0fe325ed3b865ae2cdaa3649eb25461";
    const decodedData = abiDecoder.decodeMethod(testData);
    console.log("decodedData" + decodedData);
    console.log(expect(decodedData).to.be.an("object"));
    console.log(expect(decodedData).to.have.all.keys("name", "params"));
    console.log(expect(decodedData.name).to.be.a("string"));
    console.log(expect(decodedData.params).to.be.a("array"));
    console.log(expect(decodedData.params).to.have.length(1));
    console.log(expect(decodedData.params[0].value[0]).to.equal("1"));
    console.log(expect(decodedData.params[0].value[1]).to.equal("2"));
    console.log(expect(decodedData.params[0].value[2]).to.equal("3"));
    console.log(expect(decodedData.params[0].name).to.equal("n"));
    console.log(expect(decodedData.params[0].type).to.equal("uint256[]"));
  });

  it("decode logs without indexed", () => {
    const testLogs = [
      {
        data: "0x00000000000000000000000065039084cc6f4773291a6ed7dcf5bc3a2e894ff3000000000000000000000000435a4167bc34107bd03e267f9d6b869255151a27",
        topics: ["0x4fb057ad4a26ed17a57957fa69c306f11987596069b89521c511fc9a894e6161"],
        address: "0x0457874Bb0a346962128a0C01310d00Fc5bb6a83"
      }
    ];

    const decodedLogs = abiDecoder.decodeLogs(testLogs);
    console.log("decodedLogs" + decodedLogs);
    console.log(expect(decodedLogs).to.be.an("array"));
    console.log(expect(decodedLogs).to.have.length(1));
    console.log(expect(decodedLogs[0].name).to.equal("ContractInstantiation"));
    console.log(expect(decodedLogs[0].events).to.have.length(2));
    console.log(expect(decodedLogs[0].address).to.equal("0x0457874Bb0a346962128a0C01310d00Fc5bb6a83"));
    console.log(expect(decodedLogs[0].events[0].name).to.equal("sender"));
    console.log(expect(decodedLogs[0].events[0].value).to.equal("0x65039084cc6f4773291a6ed7dcf5bc3a2e894ff3"));
    console.log(expect(decodedLogs[0].events[0].type).to.equal("address"));
    console.log(expect(decodedLogs[0].events[1].name).to.equal("instantiation"));
    console.log(expect(decodedLogs[0].events[1].value).to.equal("0x435a4167bc34107bd03e267f9d6b869255151a27"));
    console.log(expect(decodedLogs[0].events[1].type).to.equal("address"));
  });

  it("decode logs with indexed param", () => {
    const walletABI = [{"inputs": [{"type": "uint256", "name": ""}], "constant": true, "name": "owners", "payable": false, "outputs": [{"type": "address", "name": ""}], "type": "function"}, {"inputs": [{"type": "address", "name": "owner"}], "constant": false, "name": "removeOwner", "payable": false, "outputs": [], "type": "function"}, {"inputs": [{"type": "uint256", "name": "transactionId"}], "constant": false, "name": "revokeConfirmation", "payable": false, "outputs": [], "type": "function"}, {"inputs": [{"type": "address", "name": ""}], "constant": true, "name": "isOwner", "payable": false, "outputs": [{"type": "bool", "name": ""}], "type": "function"}, {"inputs": [{"type": "uint256", "name": ""}, {"type": "address", "name": ""}], "constant": true, "name": "confirmations", "payable": false, "outputs": [{"type": "bool", "name": ""}], "type": "function"}, {"inputs": [], "constant": true, "name": "calcMaxWithdraw", "payable": false, "outputs": [{"type": "uint256", "name": ""}], "type": "function"}, {"inputs": [{"type": "bool", "name": "pending"}, {"type": "bool", "name": "executed"}], "constant": true, "name": "getTransactionCount", "payable": false, "outputs": [{"type": "uint256", "name": "count"}], "type": "function"}, {"inputs": [], "constant": true, "name": "dailyLimit", "payable": false, "outputs": [{"type": "uint256", "name": ""}], "type": "function"}, {"inputs": [], "constant": true, "name": "lastDay", "payable": false, "outputs": [{"type": "uint256", "name": ""}], "type": "function"}, {"inputs": [{"type": "address", "name": "owner"}], "constant": false, "name": "addOwner", "payable": false, "outputs": [], "type": "function"}, {"inputs": [{"type": "uint256", "name": "transactionId"}], "constant": true, "name": "isConfirmed", "payable": false, "outputs": [{"type": "bool", "name": ""}], "type": "function"}, {"inputs": [{"type": "uint256", "name": "transactionId"}], "constant": true, "name": "getConfirmationCount", "payable": false, "outputs": [{"type": "uint256", "name": "count"}], "type": "function"}, {"inputs": [{"type": "uint256", "name": ""}], "constant": true, "name": "transactions", "payable": false, "outputs": [{"type": "address", "name": "destination"}, {"type": "uint256", "name": "value"}, {"type": "bytes", "name": "data"}, {"type": "bool", "name": "executed"}], "type": "function"}, {"inputs": [], "constant": true, "name": "getOwners", "payable": false, "outputs": [{"type": "address[]", "name": ""}], "type": "function"}, {"inputs": [{"type": "uint256", "name": "from"}, {"type": "uint256", "name": "to"}, {"type": "bool", "name": "pending"}, {"type": "bool", "name": "executed"}], "constant": true, "name": "getTransactionIds", "payable": false, "outputs": [{"type": "uint256[]", "name": "_transactionIds"}], "type": "function"}, {"inputs": [{"type": "uint256", "name": "transactionId"}], "constant": true, "name": "getConfirmations", "payable": false, "outputs": [{"type": "address[]", "name": "_confirmations"}], "type": "function"}, {"inputs": [], "constant": true, "name": "transactionCount", "payable": false, "outputs": [{"type": "uint256", "name": ""}], "type": "function"}, {"inputs": [{"type": "uint256", "name": "_required"}], "constant": false, "name": "changeRequirement", "payable": false, "outputs": [], "type": "function"}, {"inputs": [{"type": "uint256", "name": "transactionId"}], "constant": false, "name": "confirmTransaction", "payable": false, "outputs": [], "type": "function"}, {"inputs": [{"type": "address", "name": "destination"}, {"type": "uint256", "name": "value"}, {"type": "bytes", "name": "data"}], "constant": false, "name": "submitTransaction", "payable": false, "outputs": [{"type": "uint256", "name": "transactionId"}], "type": "function"}, {"inputs": [{"type": "uint256", "name": "_dailyLimit"}], "constant": false, "name": "changeDailyLimit", "payable": false, "outputs": [], "type": "function"}, {"inputs": [], "constant": true, "name": "MAX_OWNER_COUNT", "payable": false, "outputs": [{"type": "uint256", "name": ""}], "type": "function"}, {"inputs": [], "constant": true, "name": "required", "payable": false, "outputs": [{"type": "uint256", "name": ""}], "type": "function"}, {"inputs": [{"type": "address", "name": "owner"}, {"type": "address", "name": "newOwner"}], "constant": false, "name": "replaceOwner", "payable": false, "outputs": [], "type": "function"}, {"inputs": [{"type": "uint256", "name": "transactionId"}], "constant": false, "name": "executeTransaction", "payable": false, "outputs": [], "type": "function"}, {"inputs": [], "constant": true, "name": "spentToday", "payable": false, "outputs": [{"type": "uint256", "name": ""}], "type": "function"}, {"inputs": [{"type": "address[]", "name": "_owners"}, {"type": "uint256", "name": "_required"}, {"type": "uint256", "name": "_dailyLimit"}], "type": "constructor"}, {"payable": true, "type": "fallback"}, {"inputs": [{"indexed": false, "type": "uint256", "name": "dailyLimit"}], "type": "event", "name": "DailyLimitChange", "anonymous": false}, {"inputs": [{"indexed": true, "type": "address", "name": "sender"}, {"indexed": true, "type": "uint256", "name": "transactionId"}], "type": "event", "name": "Confirmation", "anonymous": false}, {"inputs": [{"indexed": true, "type": "address", "name": "sender"}, {"indexed": true, "type": "uint256", "name": "transactionId"}], "type": "event", "name": "Revocation", "anonymous": false}, {"inputs": [{"indexed": true, "type": "uint256", "name": "transactionId"}], "type": "event", "name": "Submission", "anonymous": false}, {"inputs": [{"indexed": true, "type": "uint256", "name": "transactionId"}], "type": "event", "name": "Execution", "anonymous": false}, {"inputs": [{"indexed": true, "type": "uint256", "name": "transactionId"}], "type": "event", "name": "ExecutionFailure", "anonymous": false}, {"inputs": [{"indexed": true, "type": "address", "name": "sender"}, {"indexed": false, "type": "uint256", "name": "value"}], "type": "event", "name": "Deposit", "anonymous": false}, {"inputs": [{"indexed": true, "type": "address", "name": "owner"}], "type": "event", "name": "OwnerAddition", "anonymous": false}, {"inputs": [{"indexed": true, "type": "address", "name": "owner"}], "type": "event", "name": "OwnerRemoval", "anonymous": false}, {"inputs": [{"indexed": false, "type": "uint256", "name": "required"}], "type": "event", "name": "RequirementChange", "anonymous": false}];
    abiDecoder.addABI(walletABI);
    const testLogs = [
      {
        data: "0x00000000000000000000000000000000000000000000000000038d7ea4c68000",
        topics: ["0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c", "0x00000000000000000000000005039084cc6f4773291a6ed7dcf5bc3a2e894ff3"],
        address: "0x0457874Bb0a346962128a0C01310d00Fc5bb6a81"
      }
    ];
    const decodedLogs = abiDecoder.decodeLogs(testLogs);
    console.log("decodedLogs" + decodedLogs);
    console.log(expect(decodedLogs).to.be.an("array"));
    console.log(expect(decodedLogs).to.have.length(1));
    console.log(expect(decodedLogs[0].name).to.equal("Deposit"));
    console.log(expect(decodedLogs[0].events).to.have.length(2));
    console.log(expect(decodedLogs[0].address).to.equal("0x0457874Bb0a346962128a0C01310d00Fc5bb6a81"));
    console.log(expect(decodedLogs[0].events[0].name).to.equal("sender"));
    console.log(expect(decodedLogs[0].events[0].type).to.equal("address"));
    console.log(expect(decodedLogs[0].events[0].value).to.equal("0x05039084cc6f4773291a6ed7dcf5bc3a2e894ff3"));
    console.log(expect(decodedLogs[0].events[1].name).to.equal("value"));
    console.log(expect(decodedLogs[0].events[1].value).to.equal("1000000000000000"));
    console.log(expect(decodedLogs[0].events[1].type).to.equal("uint256"));
  });

  it("decode logs with indexed param and uint value", () => {
    const testABI = [{"anonymous":false,"inputs":[{"indexed":true,"name":"voter","type":"address"},{"indexed":true,"name":"pollId","type":"uint256"},{"indexed":true,"name":"optionId","type":"uint256"}],"name":"Voted","type":"event"}];
    abiDecoder.addABI(testABI);
    const testLogs = [
      {
        data: "0x",
        "topics": [
          "0xea66f58e474bc09f580000e81f31b334d171db387d0c6098ba47bd897741679b",
          "0x00000000000000000000000014341f81df14ca86e1420ec9e6abd343fb1c5bfc",
          "0x0000000000000000000000000000000000000000000000000000000000000022",
          "0x00000000000000000000000000000000000000000000000000000000000000f1"
        ],
        address: "0xF9be8F0945acDdeeDaA64DFCA5Fe9629D0CF8E5D"
      }
    ];
    const decodedLogs = abiDecoder.decodeLogs(testLogs);
    console.log("decodedLogs" + decodedLogs);
    console.log(expect(decodedLogs).to.be.an("array"));
    console.log(expect(decodedLogs).to.have.length(1));
    console.log(expect(decodedLogs[0].name).to.equal("Voted"));
    console.log(expect(decodedLogs[0].events).to.have.length(3));
    console.log(expect(decodedLogs[0].address).to.equal("0xF9be8F0945acDdeeDaA64DFCA5Fe9629D0CF8E5D"));
    console.log(expect(decodedLogs[0].events[0].name).to.equal("voter"));
    console.log(expect(decodedLogs[0].events[0].type).to.equal("address"));
    console.log(expect(decodedLogs[0].events[0].value).to.equal("0x14341f81df14ca86e1420ec9e6abd343fb1c5bfc"));
    console.log(expect(decodedLogs[0].events[1].name).to.equal("pollId"));
    console.log(expect(decodedLogs[0].events[1].value).to.equal("34"));
    console.log(expect(decodedLogs[0].events[1].type).to.equal("uint256"));
    console.log(expect(decodedLogs[0].events[2].name).to.equal("optionId"));
    console.log(expect(decodedLogs[0].events[2].value).to.equal("241"));
    console.log(expect(decodedLogs[0].events[2].type).to.equal("uint256"));
  });

  it("remove ABI", () => {
    let methods = abiDecoder.getMethodIDs();
    expect(methods).to.be.an("object");
    expect(Object.keys(methods)).to.have.length(44);

    abiDecoder.removeABI(testABI);

    methods = abiDecoder.getMethodIDs();
    expect(methods).to.be.an("object");
    expect(Object.keys(methods)).to.have.length(39);
  });

});
