/*jslint node: true */
"use strict";

exports.COUNT_WITNESSES = 5;
exports.MAX_WITNESS_LIST_MUTATIONS = 1;
exports.TOTAL_WHITEBYTES = 391333300000000;
exports.MAJORITY_OF_WITNESSES = (exports.COUNT_WITNESSES%2===0) ? (exports.COUNT_WITNESSES/2+1) : Math.floor(exports.COUNT_WITNESSES/2);
exports.COUNT_MC_BALLS_FOR_PAID_WITNESSING = 100;
exports.versionWithoutTimestamp = '1.0';
exports.version = '1.0';
exports.alt = '1';
exports.supported_versions = ['1.0', '2.0'];
exports.bTestnet = (exports.alt === '2' && exports.version === '1.0t');

exports.GENESIS_UNIT = 'FxtHGkOHjv7aXajkg00/22Xp7VVXZEvT5cXfe8BSZEQ=';
exports.BLACKBYTES_ASSET = 'zB4CGbWs1FAIufb7nbyekWzVVvp/0zmXOOLZ9L6oEf8=';//L6Uo/Nx5R6Fq70eV5c/JulFqNWIFrvXTvk8A4KWJmlQ=

exports.HASH_LENGTH = 44;
exports.PUBKEY_LENGTH = 44;
exports.SIG_LENGTH = 88;

// anti-spam limits
exports.MAX_AUTHORS_PER_UNIT = 16;
exports.MAX_PARENTS_PER_UNIT = 16;
exports.MAX_MESSAGES_PER_UNIT = 128;
exports.MAX_SPEND_PROOFS_PER_MESSAGE = 128;
exports.MAX_INPUTS_PER_PAYMENT_MESSAGE = 128;
exports.MAX_OUTPUTS_PER_PAYMENT_MESSAGE = 128;
exports.MAX_CHOICES_PER_POLL = 128;
exports.MAX_DENOMINATIONS_PER_ASSET_DEFINITION = 64;
exports.MAX_ATTESTORS_PER_ASSET = 64;
exports.MAX_DATA_FEED_NAME_LENGTH = 64;
exports.MAX_DATA_FEED_VALUE_LENGTH = 64;
exports.MAX_AUTHENTIFIER_LENGTH = 4096;
exports.MAX_CAP = 9e15;
exports.MAX_COMPLEXITY = 100;

exports.MAX_PROFILE_FIELD_LENGTH = 50;
exports.MAX_PROFILE_VALUE_LENGTH = 100;

exports.TEXTCOIN_CLAIM_FEE = 548;
exports.TEXTCOIN_ASSET_CLAIM_FEE = 750;
exports.TEXTCOIN_ASSET_CLAIM_HEADER_FEE = 391;
exports.TEXTCOIN_ASSET_CLAIM_MESSAGE_FEE = 209;
exports.TEXTCOIN_ASSET_CLAIM_BASE_MSG_FEE = 158;
exports.TEXTCOIN_PRIVATE_ASSET_CLAIM_MESSAGE_FEE = 99;

exports.minCoreVersion = "0.0.1";
//exports.minCoreVersionForFullNodes = exports.bTestnet ? '0.0.1' : '0.0.1';

/*
exports.witnessedLevelMustNotRetreatUpgradeMci = exports.bTestnet ? 684000 : 1400000;
exports.spendUnconfirmedUpgradeMci = exports.bTestnet ? 589000 : 2909000;
exports.branchedMinMcWlUpgradeMci = exports.bTestnet ? 593000 : 2909000;
exports.otherAddressInDefinitionUpgradeMci = exports.bTestnet ? 602000 : 2909000;
exports.attestedInDefinitionUpgradeMci = exports.bTestnet ? 616000 : 2909000;
exports.altBranchByBestParentUpgradeMci = exports.bTestnet ? 642000 : 3009824;
*/
