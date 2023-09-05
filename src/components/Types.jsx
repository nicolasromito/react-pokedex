import React, { useContext } from 'react';
import { Context } from '../context/Context';
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

export const Types = () => {
	const { handleCheckbox, openTypeSelector, filterText, filterTypeIcon } = useContext(Context);

	return ( 
		<div className="types" data-types>
			<button className="type-text" onClick={openTypeSelector} data-types-button>
				{filterText} {filterTypeIcon}
			</button>
			<div className="type-menu" >
				<div className="type-selected" >
					<label className="grass type-name" htmlFor='grass'>Planta
					
					</label>
					<input className="type-check" 
						type='checkbox'
						onChange={handleCheckbox}
						name='grass'
						id='grass'
					/>
				</div>
				<div className="type-selected" >
					
					<label className="fire type-name" htmlFor='fire'>Fuego</label>
					<input className="type-check"
						type='checkbox'
						onChange={handleCheckbox}
						name='fire'
						id='fire'
					/>
				</div>
				<div className="type-selected" >
					
					<label className="bug type-name" htmlFor='bug'>Bicho</label>
					<input className="type-check"
						type='checkbox'
						onChange={handleCheckbox}
						name='bug'
						id='bug'
					/>
				</div>
				<div className="type-selected" >
					
					<label className="fairy type-name" htmlFor='fairy'>Hada</label>
					<input className="type-check"
						type='checkbox'
						onChange={handleCheckbox}
						name='fairy'
						id='fairy'
					/>
				</div>
				<div className="type-selected" >
					
					<label className="dragon type-name" htmlFor='dragon'>Dragón</label>
					<input className="type-check"
						type='checkbox'
						onChange={handleCheckbox}
						name='dragon'
						id='dragon'
					/>
				</div>
				<div className="type-selected" >
					
					<label className="ghost type-name" htmlFor='ghost'>Fantasma</label>
					<input className="type-check"
						type='checkbox'
						onChange={handleCheckbox}
						name='ghost'
						id='ghost'
					/>
				</div>
				<div className="type-selected" >
					
					<label className="ground type-name" htmlFor='ground'>Tierra</label>
					<input className="type-check"
						type='checkbox'
						onChange={handleCheckbox}
						name='ground'
						id='ground'
					/>
				</div>
				<div className="type-selected" >
					
					<label className="normal type-name" htmlFor='normal' >Normal</label>
					<input className="type-check"
						type='checkbox'
						onChange={handleCheckbox}
						name='normal'
						id='normal'
					/>
				</div>
				<div className="type-selected" >
					
					<label className="psychic type-name" htmlFor='psychic' >Psíquico</label>
					<input className="type-check"
						type='checkbox'
						onChange={handleCheckbox}
						name='psychic'
						id='psychic'
					/>
				</div>
				<div className="type-selected" >
					
					<label className="steel type-name" htmlFor='steel'>Acero</label>
					<input className="type-check"
						type='checkbox'
						onChange={handleCheckbox}
						name='steel'
						id='steel'
					/>
				</div>
				<div className="type-selected" >
					
					<label className="dark type-name" htmlFor='dark'>Siniestro</label>
					<input className="type-check"
						type='checkbox'
						onChange={handleCheckbox}
						name='dark'
						id='dark'
					/>
				</div>
				<div className="type-selected" >
					
					<label className="electric type-name" htmlFor='electric'>Eléctrico</label>
					<input className="type-check"
						type='checkbox'
						onChange={handleCheckbox}
						name='electric'
						id='electric'
					/>
				</div>
				<div className="type-selected" >
					
					<label className="fighting type-name" htmlFor='fighting'>Lucha</label>
					<input className="type-check"
						type='checkbox'
						onChange={handleCheckbox}
						name='fighting'
						id='fighting'
					/>
				</div>
				<div className="type-selected" >
					
					<label className="flying type-name" htmlFor='flying'>Volador</label>
					<input className="type-check"
						type='checkbox'
						onChange={handleCheckbox}
						name='flying'
						id='flying'
					/>
				</div>
				<div className="type-selected" >
					
					<label className="ice type-name" htmlFor='ice'>Hielo</label>
					<input className="type-check"
						type='checkbox'
						onChange={handleCheckbox}
						name='ice'
						id='ice'
					/>
				</div>
				<div className="type-selected" >
					
					<label className="poison type-name" htmlFor='poison'>Veneno</label>
					<input className="type-check"
						type='checkbox'
						onChange={handleCheckbox}
						name='poison'
						id='poison'
					/>
				</div>
				<div className="type-selected" >
					
					<label className="rock type-name" htmlFor='rock'>Roca</label>
					<span className="type-check"></span>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='rock'
						id='rock'
					/>
				</div>
				<div className="type-selected" >
					
					<label className="water type-name" htmlFor='water'>Agua</label>
					<input className="type-check"
						type='checkbox'
						onChange={handleCheckbox}
						name='water'
						id='water'
					/>
				</div>
			</div>
		</div>
	);
};
