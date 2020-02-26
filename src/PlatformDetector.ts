export default class PlatformDetector {
	static isTerminal() {
		return process !== undefined;
	}

	private static testBrowser = undefined;

	static isBrowser() {
		try {
			if (PlatformDetector.testBrowser === undefined) {
				const w = window;
				PlatformDetector.testBrowser = true;
			}
			return PlatformDetector.testBrowser;
		} catch (e) {
			PlatformDetector.testBrowser = false;
			return PlatformDetector.testBrowser;
		}
	}
}
