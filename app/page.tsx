"use client";

import { useState } from "react";
import { feelingsCategories } from "./data/feelings";
import { SelectedFeeling } from "./types";

export default function Home() {
	const [selectedFeelings, setSelectedFeelings] = useState<SelectedFeeling[]>(
		[]
	);

	const toggleFeeling = (category: string, feeling: string) => {
		const existingFeeling = selectedFeelings.find(
			(selectedFeeling) =>
				selectedFeeling.feeling === feeling &&
				selectedFeeling.category === category
		);

		if (existingFeeling) {
			setSelectedFeelings(
				selectedFeelings.filter(
					(selectedFeeling) =>
						!(
							selectedFeeling.feeling === feeling &&
							selectedFeeling.category === category
						)
				)
			);
		} else {
			setSelectedFeelings([
				...selectedFeelings,
				{ category, feeling, intensity: 5 },
			]);
		}
	};

	const updateIntensity = (
		category: string,
		feeling: string,
		intensity: number
	) => {
		setSelectedFeelings(
			selectedFeelings.map((selectedFeeling) =>
				selectedFeeling.feeling === feeling &&
				selectedFeeling.category === category
					? { ...selectedFeeling, intensity }
					: selectedFeeling
			)
		);
	};

	const handleFeelingIntensityChange = (
		feeling: SelectedFeeling,
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const newIntensity = parseInt(event.target.value);
		updateIntensity(feeling.category, feeling.feeling, newIntensity);
	};

	const shareFeelings = async () => {
		const feelingsText = selectedFeelings
			.map((feeling) => `${feeling.feeling} (${feeling.intensity || 0})`)
			.join("\n");
		const shareText = `I'm feeling like this right now:\n\n${feelingsText}`;

		console.log(shareText);

		if (navigator.share) {
			try {
				await navigator.share({
					title: "My Feelings",
					text: shareText,
				});
				alert("Feelings shared successfully!");
			} catch (error: unknown) {
				alert("Sharing failed. Please try again.");
				console.log({ error });
			}
		} else if (navigator.clipboard) {
			try {
				await navigator.clipboard.writeText(shareText);
				alert("Feelings copied to clipboard!");
			} catch (error: unknown) {
				alert("Failed to copy to clipboard. Please try again.");
				console.log({ error });
			}
		} else {
			alert("Sharing is not supported on this device.");
		}
	};

	return (
		<div
			style={{
				background:
					"radial-gradient(circle, rgba(63,94,251,0.5214679621848739) 0%, rgba(252,70,107,0.675529586834734) 100%)",
			}}
		>
			<div className="flex flex-wrap p-6 gap-8 justify-center py-20">
				{feelingsCategories.map((categoryObj) => (
					<div
						key={categoryObj.category}
						className="card bg-base-100 w-96 shadow-xl p-6"
					>
						<h3 className="mb-4 text-center text-xl">
							{categoryObj.category}
						</h3>
						<div className="grid grid-cols-auto gap-4">
							{categoryObj.feelings.map((feeling) => {
								const isSelected = selectedFeelings.some(
									(selectedFeeling) =>
										selectedFeeling.feeling === feeling &&
										selectedFeeling.category ===
											categoryObj.category
								);

								return (
									<span
										key={feeling}
										className={`btn font-normal btn- ${
											isSelected
												? "btn-active btn-secondary shadow-xl"
												: ""
										}`}
										onClick={() =>
											toggleFeeling(
												categoryObj.category,
												feeling
											)
										}
									>
										{feeling}
									</span>
								);
							})}
						</div>
					</div>
				))}
			</div>
			{selectedFeelings.length > 0 && (
				<>
					<div className="card bg-base-100 p-10 mx-6 mb-6 shadow-xl flex flex-col align-center">
						<h3 className="text-center text-xl font-normal mb-6">
							Selected Feelings
						</h3>
						{selectedFeelings.map((selectedFeeling) => (
							<div
								className="mb-4"
								key={`${selectedFeeling.category}-${selectedFeeling.feeling}`}
							>
								<div className="flex justify-between">
									<span className="block mb-2">
										{selectedFeeling.feeling}
									</span>
									<span className="block mb-2">
										{selectedFeeling.intensity}
									</span>
								</div>
								<input
									type="range"
									min={1}
									max={10}
									className="range range-lg"
									value={selectedFeeling.intensity}
									onChange={(event) =>
										handleFeelingIntensityChange(
											selectedFeeling,
											event
										)
									}
								/>
							</div>
						))}
					</div>
					<button
						className="btn btn-block btn-lg mx-6 mb-2 btn-primary"
						onClick={shareFeelings}
					>
						Share with Partner
					</button>
				</>
			)}
		</div>
	);
}
