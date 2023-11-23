// import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../service/UserSevice';
import ReactPaginate from 'react-paginate';
const TableUsers = (props) => {

    const [listUsers, setListUsers] = useState([]);
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    useEffect(() => {
        getUsers(1);
    }, [])

    const getUsers = async (page) => {
        let res = await fetchAllUser(page);
        console.log("check", res);
        if (res && res.data) {
            setTotalUsers(res.total)
            setListUsers(res.data)
            setTotalPages(res.total_pages)
        }
    }
    console.log(listUsers);

    const handlePageClick = (event) => {
        console.log("check event", event);
        getUsers(+event.selected + 1);
        // dau + co tac dung bien doi string thanh int
    }
    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <tr key={`users-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.email}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                </tr>
                            )
                        })}

                </tbody>
            </Table>
            {/* phan trang */}
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={totalPages}
                previousLabel="< previous"

                pageClassName='page-item'
                pageLinkClassName='page-link'
                previousClassName='page-item'
                previousLinkClassName='page-link'
                nextClassName='page-item'
                nextLinkClassName='page-link'
                breakClassName='page-item'
                breakLinkClassName='page-link'
                containerClassName='pagination'
                activeClassName='active'
            />
        </>)
}

export default TableUsers;