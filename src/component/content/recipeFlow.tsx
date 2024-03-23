'use client'
import { NextPage } from 'next';
import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import { RecipeType } from '@/types/data';
import { RecipeFlowItemHeading } from '@/ui/text/title';
import MdxContent from '../mdx/mdxContent';

export type RecipeFlowProps = {
	recipe: RecipeType
}
const RecipeFlow: NextPage<RecipeFlowProps> = ({ recipe }) => {
	const steps = recipe.contents ? recipe.contents : [];
	return (
		<Box sx={{ maxWidth: 400 }}>
			<Stepper activeStep={-1} orientation="vertical">
				{steps.map((step, index) => (
					<Step key={step.label} expanded={true} completed={false}>
						<StepLabel>
							<RecipeFlowItemHeading>
								{step.label}
							</RecipeFlowItemHeading>
						</StepLabel>
						<StepContent>
							<MdxContent>
								{step.description}
							</MdxContent>
						</StepContent>
					</Step>
				))}
			</Stepper>
		</Box>
	);
}
export default RecipeFlow;