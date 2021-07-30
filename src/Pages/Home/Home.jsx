import React, { lazy, Suspense } from 'react'
import SectionA from '../../Components/SectionA/SectionA'
const SectionB = lazy(() => import('../../Components/SectionB/SectionB'))


function Home() {
    return (
        <div className="">
            <SectionA />
            <div className="panel-b">
                <Suspense fallback={<h1>Loading</h1>}>
                    <SectionB />
                </Suspense>
            </div>
        </div>
    )
}

export default Home
