import { useQuery } from "@tanstack/react-query";
import SharedHeading from "../../SharedComponents/SharedHeading";
import Users from "./Users";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import UsersCard from "./UsersCard";


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
                <table className="min-w-[90%] shadow-md  border mx-auto border-gray-100  my-6 hidden sm:table">
                    <thead>
                        <tr className="bg-black text-white text-lg">
                            <th className="py-3 px-6 text-left border-b">Name</th>
                            <th className="py-3 px-6 text-left border-b">Email</th>
                            <th className="py-3 px-6 text-left border-b">Role</th>
                            <th className="py-3 px-6  border-b text-end">Make Tour Guide</th>
                            <th className="py-3 px-6  border-b text-end">Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tourists.map(tourist=><Users tourist={tourist} key={tourist._id} refetch={refetch}></Users>)
                        }
                      
                    </tbody>
                </table>
                <div className="min-w-[90%]  mx-auto  my-6 md:hidden lg:hidden">
                    {
                        tourists.map(tourist => <UsersCard refetch={refetch} key={tourist._id} tourist={tourist}></UsersCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default ManageUsers;