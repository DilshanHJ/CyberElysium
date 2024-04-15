import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";

const Show = ({ auth, student }) => {
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {student.name}
                </h2>
            }
        >
            <Head title={student.name} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className=" bg-slate-300 w-full rounded h-48 flex flex-row justify-start items-center p-4">
                                <img
                                    src={student.image_path}
                                    className=" w-40 h-40 rounded-full p-2 "
                                    alt=""
                                />
                                <div className="flex flex-col justify-between items-start w-5/6 h-full px-4">
                                    <div className=" text-xl font-bold text-gray-600">
                                        Student Name :- {student.name}
                                    </div>
                                    <div className=" text-m font-bold text-gray-600">
                                        Student ID :- {student.id}
                                    </div>
                                    <div className=" text-m font-bold text-gray-600">
                                        Student Age :- {student.age}
                                    </div>
                                    <div className=" text-m font-bold text-gray-600">
                                        Student Status :-{" "}
                                        {student.status === "active"
                                            ? "Active"
                                            : "Inactive"}
                                    </div>
                                </div>
                                <div className="px-4 w-5/6 flex flex-row justify-end gap-4 items-end h-full">
                                    <button
                                        onClick={() => {
                                            window.location.href = route(
                                                "student.edit",
                                                student.id
                                            );
                                        }}
                                        className=" w-28 px-3 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => {
                                            if (
                                                !window.confirm("Are you sure?")
                                            ) {
                                                return;
                                            }
                                            router.delete(
                                                route(
                                                    "student.destroy",
                                                    student.id
                                                )
                                            );
                                        }}
                                        className=" w-28 px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};
export default Show;
