// **WARNING**
// - This script makes it seem like you have petals that you actually don't.
//   Therefore, if you equip them or use them for crafting more than once, your account will be banned.
// - We do NOT recommend running the script outside of a guest account if you are not a ban speedrunner!
// - Don't forget that we do NOT have any responsibility for any damage to you caused by the script.

(async () => {
	const kMaxRarities = 9;
	const kMaxPetals = 92;
	const petalInventoryBaseAddress = 0x01014CA4;
	for (let petalIndex = 1; petalIndex <= kMaxPetals; petalIndex++) {
		for (let rarityIndex = 0; rarityIndex < kMaxRarities; rarityIndex++) {
			const offset = ((petalIndex * kMaxRarities + rarityIndex) << 2);
			Module.HEAPU32[(petalInventoryBaseAddress + offset) >> 2] = 1;
		}
	}
	console.log("success!");
})();
