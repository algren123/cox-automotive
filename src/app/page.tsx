'use client'

import { useEffect, useState } from 'react';
import { fetchVehicles } from "./lib/vehicles";
import { Vehicle } from './types/types';
import VehicleListItem from './components/VehicleListItem';

export default function Home() {
	const [vehicles, setVehicles] = useState<Vehicle[]>([]);
	const [sortKey, setSortKey] = useState<'price' | 'year' | 'mileage'>('price');
	const [sortOrder, setSortOrder] = useState<'ascending' | 'descending'>('ascending');

	useEffect(() => {
		fetchVehicles().then(setVehicles)
	}, [])

	const sortedVehicles = vehicles.sort((a, b) => {
		const diff = a[sortKey] - b[sortKey];
		return sortOrder === 'ascending' ? diff : (-diff);
	})

	return (
		<div className="font-sans flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 p-20">
			<main className="flex flex-col gap-6 row-start-2 items-center sm:items-start">
				<h1>Vehicle List</h1>
				<div className="flex gap-6">
					<div>
						<select value={sortKey} onChange={e => setSortKey(e.target.value as 'price' | 'year' | 'mileage')} className="[&>option]:bg-black">
							<option value="price" className="bg-black">Price</option>
							<option value="year">Year</option>
							<option value="mileage">Mileage</option>
						</select>
					</div>
					<div>
						<select value={sortOrder} onChange={e => setSortOrder(e.target.value as 'ascending' | 'descending')} className="[&>option]:bg-black">
							<option value="ascending">Ascending</option>
							<option value="descending">Descending</option>
						</select>
					</div>
				</div>
				<div className="flex gap-4 items-center flex-col sm:flex-row">
					{sortedVehicles.map((vehicle) => <VehicleListItem key={vehicle.id} vehicle={vehicle} />)}
				</div>
			</main>
		</div>
	);
}
