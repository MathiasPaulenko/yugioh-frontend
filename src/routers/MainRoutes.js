import { Routes, Route } from 'react-router-dom';

import { Navbar } from '../components/common/Navbar';

import { CollectionsScreen } from '../components/screens/CollectionsScreen'

export const MainRoutes = () => {

    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>

                    <Route path="card/:serial_code" element={<CollectionsScreen />} />
                    <Route path="/" element={<CollectionsScreen />} />
                    <Route path="/collections" element={<CollectionsScreen />} />

                </Routes>
            </div>
        </>
    )
}
