"use client"


import { usePathname, useRouter } from 'next/navigation';
import ReactPaginate from 'react-paginate'
import Container from './Container';
const Pagination = ({ pageCount }: { pageCount: number }) => {
    const router = useRouter();
    function handlePageClick(e: { selected: number }) {
        const page = e.selected + 1;
        router.push(`/components/store?page=${page}&per_page=3`)

    }


    return (
        <Container>
            <div >
                <ReactPaginate
                    containerClassName="flex gap-3 p-4  mt-10 font-bold justify-center"
                    pageClassName="px-3 py-1 border rounded cursor-pointer"
                    pageLinkClassName="block"
                    activeClassName="bg-green-500 text-white rounded"
                    previousClassName="px-3 py-1 border rounded cursor-pointer"
                    nextClassName="px-3 py-1 border rounded cursor-pointer"
                    breakLabel="..."
                    breakClassName="px-3 py-1"
                    pageRangeDisplayed={2}      // 👈 middle pages
                    marginPagesDisplayed={3}    // 👈 three number the left site and three the right site
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    previousLabel="previous>"
                    nextLabel="next"
                />


            </div>
        </Container>

    )
}
export default Pagination;