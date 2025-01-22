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
			} catch (error: unknown) {
				console.log({ error });
			}
		} else if (navigator.clipboard) {
			try {
				await navigator.clipboard.writeText(shareText);
			} catch (error: unknown) {
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
										selectedFeeling.feeling ===
											feeling.name &&
										selectedFeeling.category ===
											categoryObj.category
								);

								return (
									<div
										key={feeling.name}
										className="flex w-full"
									>
										<span
											className={`btn font-normal flex-1 mr-2 select-none  ${
												isSelected
													? "btn-active btn-secondary shadow-xl"
													: ""
											}`}
											style={{
												background: isSelected
													? "linear-gradient(90deg, rgba(131,58,180,0.5) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,0.5) 100%)"
													: "",
												border: "none",
											}}
											onClick={() =>
												toggleFeeling(
													categoryObj.category,
													feeling.name
												)
											}
										>
											{feeling.name}
										</span>
										<button
											className="btn btn-circle"
											onClick={() => {
												const modal =
													document.getElementById(
														`feeling-modal-${feeling.name}`
													) as HTMLDialogElement | null;

												if (modal) {
													modal.showModal();
												}
											}}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="size-6"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
												/>
											</svg>
										</button>
										<dialog
											id={`feeling-modal-${feeling.name}`}
											className="modal"
										>
											<div className="modal-box">
												<form method="dialog">
													<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
														✕
													</button>
												</form>
												<h3 className="font-bold text-lg">
													{feeling.name}
												</h3>
												<p className="py-4">
													{feeling.description}
												</p>
											</div>
											<form
												method="dialog"
												className="modal-backdrop"
											>
												<button>close</button>
											</form>
										</dialog>
									</div>
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
						className="btn btn-block btn-lg mb-6 btn-primary"
						onClick={shareFeelings}
					>
						Share ❤️
					</button>
				</>
			)}
		</div>
	);
}
