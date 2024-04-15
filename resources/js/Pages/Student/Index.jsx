import Pagination from "@/Components/Pagination";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const Index = ({ auth, students, success }) => {
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Students
                </h2>
            }
        >
            <Head title="Students" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg pb-8 ">
                        {success && (
                            <div className="py-2 bg-emerald-500 px-4 text-2xl text-white font-bold rounded mx-8 my-4">
                                {success}
                            </div>
                        )}
                        <div className="p-8 text-gray-900 font-bold flex flex-row justify-between items-center">
                            Click on Student to View Details, Edit or Delete
                            <button
                                onClick={() => {
                                    window.location.href =
                                        route("student.create");
                                }}
                                className=" bg-blue-500 hover:bg-blue-700 rounded px-4 py-1 text-white"
                            >
                                Enter New Student
                            </button>
                        </div>
                        <div className="w-full flex flex-row justify-between items-center py-4 px-8 flex-wrap">
                            {students.data.map((student) => {
                                return (
                                    <div
                                        style={{
                                            width: "360px",
                                            height: "80px",
                                        }}
                                        className=" rounded bg-slate-300 flex flex-row justify-start items-center px-2 py-3 shadow hover:bg-slate-400 hover:shadow-md hover:scale-105 transition duration-150 ease-in-out m-1"
                                        key={student.id}
                                        onClick={() => {
                                            window.location.href = route(
                                                "student.show",
                                                student.id
                                            );
                                        }}
                                    >
                                        <img
                                            src={student.image_path}
                                            alt=""
                                            className=" w-16 h-16 rounded-full p-2 "
                                        />
                                        <div className="w-full h-full p-2 flex flex-col justify-between items-start">
                                            <div className="w-full flex flex-row justify-between items-center">
                                                <span className=" text-md font-bold text-gray-600">
                                                    <h1>{student.name}</h1>
                                                </span>
                                                <span className=" text-md text-gray-600">
                                                    {student.status === "active"
                                                        ? "Active"
                                                        : "Inactive"}
                                                </span>
                                            </div>
                                            <div className=" text-md text-gray-600">
                                                Student ID : {student.id}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <Pagination links={students.meta.links} />
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};
export default Index;
