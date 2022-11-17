export interface Order {
	_id: string;
	table: string;
	status: 'WAITING' | 'IN_PRODUCTION' | 'DONE';
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
