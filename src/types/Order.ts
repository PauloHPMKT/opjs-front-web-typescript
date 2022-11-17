export interface Order {
	_id: string;
	table: string;
	status: string;
	products: {
		_id: string;
		product: {
			name: string;
			imagePath: string;
			pricing: number;
		};
		quantity: number;
	}[];
}
