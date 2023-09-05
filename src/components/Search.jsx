import { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Context } from "../context/Context";
import { FaSearch } from "react-icons/fa";

export const Search = () => {
	const { onInputChange, valueSearch, onResetForm, onClickSearch } =
		useContext(Context);
	const navigate = useNavigate();
	const onSearchSubmit = e => {
		e.preventDefault();
		navigate("/", {
			state: valueSearch,
		});

		onResetForm();
	};

	return (
		<>
			<div className="text-search">
				Nombre
			</div>
			<form className="container"  onSubmit={onSearchSubmit}>
				<div className="form-group">
					<input
						type="search"
						name="valueSearch"
						id=""
						value={valueSearch}
						onChange={onInputChange}
						placeholder="Escribe el nombre del pokemon"
					/>
				</div>
				<button onClick={onClickSearch} className="btn-search">
					<FaSearch/>
				</button>
			</form>
		</>
	);
};