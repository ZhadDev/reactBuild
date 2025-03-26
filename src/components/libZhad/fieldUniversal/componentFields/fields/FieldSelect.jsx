// eslint-disable-next-line no-unused-vars
import React from 'react';

import { Colors } from '../../../../../Theme/index.js';
import TextStyle from '../../TextFieldMaterial.css.jsx';
import PropTypes from 'prop-types';

/* Material */
import { withStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Select } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';

/**
 * @name FieldSelect
 * @description componente field tipo seleccionable
 * @param {props} props propiedades o parámetros del componente
 * @return {}
 */
export const FieldSelect = props => {
	let { disabled } = props;
	const { arrDataSelect, id, label, onChange, value } = props;
	if (!disabled) {
		disabled = !(arrDataSelect.length > 0);
	}

	const BootstrapInput = withStyles(theme => ({
		root: {
			'label + &': {
				marginTop: '9px',
			},
		},
		input: {
			position: 'relative',
			borderBottom: '2px solid ' + Colors.ClrBase,
			fontSize: 16,
			padding: '8px 26px 8px 12px',
			transition: theme.transitions.create(['border-color', 'box-shadow']),
			fontFamily: [
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
			].join(','),
			'&:focus': {
				borderRadius: 4,
				borderColor: Colors.ClrBase,
			},
		},
	}))(InputBase);

	return (
		<FormControl fullWidth>
			<InputLabel htmlFor={id}>{label}</InputLabel>
			<Select
				native
				fullWidth
				value={value}
				onChange={event => {
					const key = event.target.value;
					onChange(key);
				}}
				input={<BootstrapInput />}
				inputProps={{
					name: label,
					id,
				}}
				disabled={disabled}
			>
				<option aria-label='None' value='' />
				{Object.keys(arrDataSelect).map(key => {
					return (
						<option
							style={TextStyle.optionSelect}
							key={'one-' + key}
							value={key}
						>
							{arrDataSelect[key]}
						</option>
					);
				})}
			</Select>
		</FormControl>
	);
};

FieldSelect.propTypes = {
	disabled: PropTypes.bool,
	arrDataSelect: PropTypes.array,
	id: PropTypes.any,
	label: PropTypes.any,
	value: PropTypes.any,
	onChange: PropTypes.func,
};
