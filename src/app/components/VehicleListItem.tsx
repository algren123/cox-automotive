import Link from "next/link";
import { Vehicle } from "../types/types"

interface IVehicleListItemProps {
	vehicle: Vehicle
}

const VehicleListItem: React.FC<IVehicleListItemProps> = ({ vehicle }) => {
	return (
		<div className="border-1 p-2">
			<ol>
				<li>{vehicle.make} {vehicle.model}</li>
				<li>Year: {vehicle.year}</li>
				<li>Price: £{vehicle.price}</li>
				<li>Mileage: {vehicle.mileage}</li>
				<li>Colour: {vehicle.colour}</li>
			</ol>
			<Link href={`/vehicles/${vehicle.id}`} className="text-blue-500 mt-2">View Vehicle</Link>
		</div>
	)
}

export default VehicleListItem;
