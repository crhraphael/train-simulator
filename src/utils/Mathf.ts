export default class Mathf {
	/**
	 * Retorna o valor sem extrapolar os limites impostos
	 *
	 * @param value
	 * @param min
	 * @param max
	 */
	static clamp(value, min, max) {
		return (value <= min)
			? min
			: (value >= max)
				? max
				: value;
	}

	static abs(x: number): number {
		return Math.abs(x);
	}

	static acos(x: number): number {
		return Math.acos(x);
	}

	static asin(x: number): number {
		return Math.asin(x);
	}

	static atan(x: number): number {
		return Math.atan(x);
	}

	static atan2(y: number, x: number): number {
		return Math.atan2(y, x);
	}

	static ceil(x: number): number {
		return Math.ceil(x);
	}

	static cos(x: number): number {
		return Math.cos(x);
	}

	static exp(x: number): number {
		return Math.exp(x);
	}

	static floor(x: number): number {
		return Math.floor(x);
	}

	static log(x: number): number {
		return Math.log(x);
	}

	static max(...values: number[]): number {
		return Math.max(...values);
	}

	static min(...values: number[]): number {
		return Math.min(...values);
	}

	static pow(x: number, y: number): number {
		// eslint-disable-next-line no-restricted-properties
		return Math.pow(x, y);
	}

	static random(): number {
		return Math.random();
	}

	static round(x: number): number {
		return Math.round(x);
	}

	static sin(x: number): number {
		return Math.sin(x);
	}

	static sqrt(x: number): number {
		return Math.sqrt(x);
	}

	static tan(x: number): number {
		return Math.tan(x);
	}

	static clz32(x: number): number {
		return Math.clz32(x);
	}

	static imul(x: number, y: number): number {
		return Math.imul(x, y);
	}

	static sign(x: number): number {
		return Math.sign(x);
	}

	static log10(x: number): number {
		return Math.log10(x);
	}

	static log2(x: number): number {
		return Math.log2(x);
	}

	static log1p(x: number): number {
		return Math.log1p(x);
	}

	static expm1(x: number): number {
		return Math.expm1(x);
	}

	static cosh(x: number): number {
		return Math.cosh(x);
	}

	static sinh(x: number): number {
		return Math.sinh(x);
	}

	static tanh(x: number): number {
		return Math.tanh(x);
	}

	static acosh(x: number): number {
		return Math.acosh(x);
	}

	static asinh(x: number): number {
		return Math.asinh(x);
	}

	static atanh(x: number): number {
		return Math.atanh(x);
	}

	static hypot(...values: number[]): number {
		return Math.hypot(...values);
	}

	static trunc(x: number): number {
		return Math.trunc(x);
	}

	static 	fround(x: number): number {
		return Math.acos(x);
	}

	static cbrt(x: number): number {
		return Math.acos(x);
	}
}
