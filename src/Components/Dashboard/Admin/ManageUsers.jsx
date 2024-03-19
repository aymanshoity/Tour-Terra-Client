import { useQuery } from "@tanstack/react-query";
import SharedHeading from "../../SharedComponents/SharedHeading";
import Users from "./Users";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";


const ManageUsers = () => {
    const axiosSecure = UseAxiosSecure()
    const { data: tourists = [], refetch } = useQuery({
        queryKey: ['tourists'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tourists`)
            console.log(res.data)
            return res.data
        }
    })
    return (
        <div>
            <SharedHeading heading1={'Manage All'} heading2={'Users'} ></SharedHeading>

            <div className="overflow-x-auto ">
                <table className="min-w-[90%] shadow-md  border mx-auto border-gray-100  my-6">
                    <thead>
                        <tr className="bg-[#333333] text-white">
                            <th className="py-3 px-6 text-left border-b">Name</th>
                            <th className="py-3 px-6 text-left border-b">Email</th>
                            <th className="py-3 px-6 text-left border-b">Role</th>
                            <th className="py-3 px-6  border-b text-end">Action</th>
                            <th className="py-3 px-6  border-b text-end">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tourists.map(tourist=><Users tourist={tourist} key={tourist._id} refetch={refetch}></Users>)
                        }
                      
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageUsers;