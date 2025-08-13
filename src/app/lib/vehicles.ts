import { vehicles } from "../consts/consts";
import { Vehicle } from "../types/types"

export const fetchVehicles = async (): Promise<Vehicle[]> => {
	return new Promise((resolve) => setTimeout(() => resolve(vehicles)))
}

export const fetchVehicleById = async (id: string): Promise<Vehicle | null> => {
	const vehicle = vehicles.find((vehicle) => vehicle.id === id) || null;
	return new Promise((resolve) => setTimeout(() => resolve(vehicle)))
}
