"use client";

import { useState } from "react";
import { FinanceQuote } from "../types/types";

interface IFinanceCalculatorPriceProps {
	vehiclePrice: number;
}

export default function FinanceCalculator({ vehiclePrice }: IFinanceCalculatorPriceProps) {
	const [deposit, setDeposit] = useState<number>(vehiclePrice * 0.1);
	const [term, setTerm] = useState(60);

	const totalAmountOfCredit = vehiclePrice - deposit;
	const quote: FinanceQuote = {
		onTheRoadPrice: vehiclePrice,
		totalDeposit: deposit,
		totalAmountOfCredit,
		numberOfMonthlyPayments: term,
		monthlyPayment: totalAmountOfCredit / term
	}

	return (
		<div className="border-4 p-6 rounded-md">
			<h2 className="font-bold mb-2">Finance Calculator</h2>
			<div className="my-4">
				<label>Deposit: <input type="number" min="0" max={String(vehiclePrice)} className="border-2 mr-2 p-1 rounded-md" value={deposit} onChange={(e) => setDeposit(Number(e.target.value))} /></label>
				<label>Term: <input type="number" min="0" className="border-2 p-1 rounded-md" value={term} onChange={(e) => setTerm(Number(e.target.value))} /></label>
			</div>

			<div>
				<p>On the road price: £{quote.onTheRoadPrice}</p>
				<p>Total Deposit: £{quote.totalDeposit}</p>
				<p>Total Credit: £{quote.totalAmountOfCredit}</p>
				<p>Term: {quote.numberOfMonthlyPayments}</p>
				<p>Monthly: £{isFinite(quote.monthlyPayment) ? quote.monthlyPayment.toFixed(2) : 0}</p>
			</div>
		</div>
	)
}
