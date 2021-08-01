import React , {lazy, Suspense} from 'react'
import Loader from '../../Components/Loader/Loader'
import SectionA from '../../Components/SectionA/SectionA'
// import SectionB from '../../Components/SectionB/SectionB'

const SectionB = lazy(() => import('../../Components/SectionB/SectionB'))
function Home() {
    return (
        <div className="">
            <SectionA />
            <Suspense fallback={<Loader></Loader>}>
                <SectionB />
            </Suspense>
        </div>
    )
}

export default Home
