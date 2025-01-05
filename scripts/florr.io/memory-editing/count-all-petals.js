// Counts all the petals you have so you can feel like a sigma
// ty to k2niqr
(async () => {
	const textDecoder = new TextDecoder();
	function readStringInDataSection(address) {
		let startAt = address;
		let length = 0;
		while (true) {
			if (Module.HEAPU8[(startAt + length)] === 0x00) {
				break;
			}
			length++;
		}
		const buffer = Module.HEAPU8.slice(startAt, (startAt + length));
		return textDecoder.decode(buffer);
	}

	const rarityNames = ["Common", "Unusual", "Rare", "Epic", "Legendary", "Mythic", "Ultra", "Super", "Unique"];
	const kMaxRarities = rarityNames.length;

	const kMaxPetals = 92;
	const petalInventoryBaseAddress = 0x0034FA0C;
	const petalDefinitionNameBaseAddress = 0x00253078;



	const petals = {};
	const totals = {};
	rarityNames.forEach((rarityName) => {
		totals[rarityName] = 0;
	});

	for (let petalIndex = 1; petalIndex <= kMaxPetals; petalIndex++) {

		const petalNameAddress = Module.HEAPU32[(petalDefinitionNameBaseAddress + ((6 << 2) * petalIndex)) >> 2];
		const petalName = readStringInDataSection(petalNameAddress);

		const amounts = {};
		rarityNames.forEach((rarityName) => {
			amounts[rarityName] = 0;
		});

		for (let rarityIndex = 0; rarityIndex < kMaxRarities; rarityIndex++) {
			const amount = Module.HEAPU32[(petalInventoryBaseAddress + ((petalIndex * kMaxRarities + rarityIndex) << 2)) >> 2];
			amounts[rarityNames[rarityIndex]] = amount;
			totals[rarityNames[rarityIndex]] += amount;
		}
		petals[petalName] = amounts;

	}

	console.log("Petals:", petals);
	console.log("Total:", totals);

})();
