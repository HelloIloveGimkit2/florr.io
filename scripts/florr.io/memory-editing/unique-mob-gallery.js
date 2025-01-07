// ⚠️ IMPORTANT: You must run the script with the MOB Gallery open.
// Credit to k2niqr for this script
// This will show unique mob stats. 

(async () => {
	const kMaxRaritiesOnGallery = 8;
	const kMaxMOBs = 69;
	const mobGalleryBaseAddress = 0x0042A8D5;
	const mobGalleryRenderingBaseAddress = 0x01173148;
	for (let rowIndex = 0; rowIndex < kMaxMOBs; rowIndex++) {
		let flags = 0;
		for (let columnIndex = 0; columnIndex < kMaxRaritiesOnGallery; columnIndex++) {
			flags |= (1 << columnIndex);
		}
		Module.HEAPU8[(mobGalleryBaseAddress + rowIndex) >> 0] = flags;
	}

	await new Promise((resolve) => setTimeout(resolve, 100));

	for (let rowIndex = 0; rowIndex < kMaxMOBs; rowIndex++) {
		for (let columnIndex = 0; columnIndex < kMaxRaritiesOnGallery; columnIndex++) {

			const offset = ((123 * rowIndex + 4 * columnIndex) << 2);
			const baseAddress = Module.HEAPU32[(mobGalleryRenderingBaseAddress + offset) >> 2];
			if (!baseAddress) {
				continue;
			}

			const mobRendererAddress = (baseAddress + (58 << 2));
			Module.HEAPU8[(mobRendererAddress + 5) >> 0] = (1 + columnIndex);

		}
	}

	console.log("Successfully modified the memory");

})();