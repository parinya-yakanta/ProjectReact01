/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState, useEffect} from 'react';
import BackendLayout from '../../../components/layouts/backend/BackendLayout';
import api from '../../../services/researchAPI';




const Research = () => {
    
const [research, setResearch] = useState([])

useEffect(() => {
    api.getAllResearch().then(res => {
        console.log(res.data)
        setResearch(res.data)
    })
}, [])

    return (
        <BackendLayout title="Research">
       
       <div>
            <h1 className="h3 mb-3">Research List</h1>
            <div className="row">
            <div className="col-12">
                <div className="card">
                <div className="card-body">
                    <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>code</th>
                            <th>nameTh</th>
                            <th>researcher</th>
                            <th>createdAt</th>
                            <th>updatedAt</th>
                            <th className="text-center">Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        research.map((researchs, index) => (
                                <tr key={index}>
                                    <td>{researchs.code}</td>
                                    <td>{researchs.nameTh}</td>
                                    <td>{researchs.researcher}</td>
                                    <td>{researchs.createdAt}</td>
                                    <td>{researchs.updatedAt}</td>
                                    <td className="text-right" style={{width:'200px'}}>
                                        <a href="#" className="btn btn-sm btn-warning">Edit</a>&nbsp;
                                        <a href="#" className="btn btn-sm btn-danger">Delete</a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                    </table>

                </div>
                </div>
            </div>
            </div>
        </div>

        </BackendLayout>
    )
}

export default Research
