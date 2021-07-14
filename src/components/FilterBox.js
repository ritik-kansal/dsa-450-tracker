import React from 'react'
import Filter from './Filter'

export default function FilterBox() {
    return (
        <div className="bg-secondary-black gray p-16 br-5 mb-32">
            <div className="filter-heading mb-8 f-16 fw-500 secondary-gray">
                Topics
            </div>
            <div className="filters f-12">
                <Filter filter="Array" selected={false} />
                <Filter filter="String" selected={false} />
                <Filter filter="Searcing & Sorting" selected={true} />
                <Filter filter="Matrix" selected={false} />
                <Filter filter="LinkedList" selected={false} />
                <Filter filter="Binary Tree" selected={true} />
                <Filter filter="BST" selected={false} />
                <Filter filter="Tree" selected={false} />
                <Filter filter="Graph" selected={false} />
                <Filter filter="Greedy" selected={false} />
                <Filter filter="Heap" selected={false} />
                <Filter filter="Bit manipulation" selected={false} />
            </div>
        </div>
    )
}
