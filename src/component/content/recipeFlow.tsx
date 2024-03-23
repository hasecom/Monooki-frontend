'use client'
import { NextPage } from 'next';
import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import { RecipeType } from '@/types/data';
import ReactMarkdown from 'react-markdown';

export type RecipeFlowProps = {
	recipe:RecipeType
}
const RecipeFlow:NextPage<RecipeFlowProps> = ({recipe}) => {
	const steps = recipe.contents ? recipe.contents : [];
	return (
		<Box sx={{ maxWidth: 400 }}>
			<Stepper activeStep={-1}  orientation="vertical">
				{steps.map((step, index) => (
					<Step key={step.label} expanded={true} completed={false}>
						<StepLabel>
							{step.label}
						</StepLabel>
						<StepContent>
							<ReactMarkdown>
								{step.description}
								</ReactMarkdown>
						</StepContent>
					</Step>
				))}
			</Stepper>
		</Box>
	);
}
export default RecipeFlow;