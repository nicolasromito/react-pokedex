import { Navigate, Route, Routes } from 'react-router-dom';
import { default as Header } from './components/Header';
import { HomePage } from './pages';
// import { PokemonPage } from './pages/PokemonPage';
// import { HomePage, PokemonPage, SearchPage } from './pages/HomePage';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />}>
				<Route index element={<HomePage />} />
				{/* <Route path='pokemon/:id' element={<PokemonPage />} /> */}
				{/* <Route path='search' element={<SearchPage />} /> */}
			</Route>

            {/* <Route path='*' element={ < to='/' />} /> */}
		</Routes>
	);
};