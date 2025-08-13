'use client'

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Vehicle } from "@/app/types/types";
import { fetchVehicleById } from "@/app/lib/vehicles";
import FinanceCalculator from "@/app/components/FinanceCalculator";
import Link from "next/link";

const VehicleDetailPage = () => {
	const { id } = useParams();
	const [vehicle, setVehicle] = useState<Vehicle | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (id) {
			fetchVehicleById(id as string).then(setVehicle).finally(() => setLoading(false));
		}
	}, [id]);

	if (loading) return <div><Link href="/">Go Back</Link><p>Loading...</p></div>
	if (!vehicle) return <div><Link href="/">Go Back</Link><p>404 - Vehicle not found</p></div>

	return (
		<>
			<Link href="/" className="mt-6">Go Back</Link>
			<div className="p-12 flex flex-col sm:flex-row justify-center gap-6">
				<div className="border-4 p-6 rounded-md">
					<p className="font-bold mb-2">Vehicle Details:</p>
					<p>{vehicle.make} {vehicle.model}</p>
					<p>Year: {vehicle.year}</p>
					<p>Price: £{vehicle.price}</p>
					<p>Mileage: {vehicle.mileage}</p>
					<p>Colour: {vehicle.colour}</p>
				</div>
				<FinanceCalculator vehiclePrice={vehicle.price} />
			</div>
		</>
	)
}

export default VehicleDetailPage;
