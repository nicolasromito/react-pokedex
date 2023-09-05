import { AppRouter } from './AppRouter';
import { Provider } from './context/Provider';

function App() {
	return (
		<Provider>
			<AppRouter />
		</Provider>
	);
}

export default App;