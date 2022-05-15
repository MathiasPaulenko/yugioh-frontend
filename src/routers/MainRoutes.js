import { Routes, Route } from 'react-router-dom';

import { Navbar } from '../components/common/Navbar';
import { CardScreen } from '../components/screens/CardScreen';

import { CollectionsScreen } from '../components/screens/CollectionsScreen'
import { FiltersScreen } from '../components/screens/FiltersScreen';

export const MainRoutes = () => {

    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>

                    <Route path="/" element={<CollectionsScreen />} />
                    <Route path="/collections" element={<CollectionsScreen />} />
                    <Route path="/filters" element={<FiltersScreen />} />
                    <Route path="card/:serial_code" element={<CardScreen />} />

                </Routes>
            </div>
        </>
    )
}
